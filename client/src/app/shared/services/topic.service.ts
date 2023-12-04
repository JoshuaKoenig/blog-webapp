import { Injectable, signal } from '@angular/core';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { addDoc, arrayUnion, collection, doc, getDoc, getFirestore, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment.development';
import { Topic } from '../models/Topic';
import { BlogPost } from '../models/BlogPosts';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private firebaseConfig = {
    projectId: environment.projectId,
    apiKey: environment.apiKey,
    authDomain: environment.authDomain,
  }

  // App settings. Needed for firebase connection
  private app = !getApps().length ? initializeApp(this.firebaseConfig) : getApp();

  // Initialize Cloud Firestore and get a reference to the service
  private firestore = getFirestore(this.app);

  // Every database update on collection 'blogPosts' updates this singelton automatically
  public topics = signal<Topic[]>([]);

  //
  private topicCollection = collection(this.firestore, "topics");

  constructor() {
    //
    onSnapshot(this.topicCollection, (snapshot) => {
      let daten: Topic[] = [];
      snapshot.forEach((doc) => {
        daten.push(doc.data() as Topic);
      });
      this.topics.set(daten);
      console.log(this.topics())
    })
  }

  //
  public async addTopic(newTopic: Topic) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'topics'), newTopic);
      newTopic.id = docRef.id
      await setDoc(doc(this.firestore, 'topics', docRef.id), newTopic);
      console.log("Dokument erfolgreich erstellt mit ID: ", docRef.id);
    } catch (e) {
      console.error("Fehler beim Hinzufügen des Dokuments: ", e);
    }
  }

  //
  public async addBlogPostToTopic(blogPostId: string, topicId: string) {
    try {
      const docRef = doc(this.firestore, 'topics', topicId);
      await updateDoc(docRef, { blogPostIds: arrayUnion(blogPostId) });
      console.log("Dokument erfolgreich aktualisiert mit ID: ", docRef.id);
    } catch (e) {
      console.error("Fehler beim Aktualisieren des Dokuments: ", e);
    }
  }


  //
  public getTopic(topicId: string) : Topic
  {
    let topic = this.topics().find(topic => topic.id === topicId)
    return topic ? (topic) : ({id: "", title:"", blogPostIds:[]})
  }
}

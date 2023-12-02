import { Injectable, signal } from '@angular/core';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { addDoc, collection, doc, getFirestore, onSnapshot, setDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment.development';
import { Topic } from '../models/Topic';

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
        let daten:Topic[] = [];
        snapshot.forEach((doc) => {
          daten.push(doc.data() as Topic);
        });
        this.topics.set(daten);
        console.log(this.topics())
      })
   }

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
}

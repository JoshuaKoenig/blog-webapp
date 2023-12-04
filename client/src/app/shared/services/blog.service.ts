import { Injectable, signal } from '@angular/core';
import { BlogPost } from '../models/BlogPosts';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { environment } from 'src/environments/environment.development';
import { TopicService } from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // App settings. Needed for firebase connection
  private app = initializeApp({
    projectId: environment.projectId,
    apiKey: environment.apiKey,
    authDomain: environment.authDomain,
  })

  // Initialize Cloud Firestore and get a reference to the service
  private firestore = getFirestore(this.app);

  // Every database update on collection 'blogPosts' updates this singelton automatically
  public blogPosts = signal<BlogPost[]>([]);

  //
  private blogCollection = collection(this.firestore, "blogPosts");

  constructor(private topicService: TopicService) {
    //
    onSnapshot(this.blogCollection, (snapshot) => {
      let daten: BlogPost[] = [];
      snapshot.forEach((doc) => {
        daten.push(doc.data() as BlogPost);
      });
      this.blogPosts.set(daten);
      console.log(this.blogPosts())
    })
  }

  //
  public async addBlogPost(newPost: BlogPost) {
    try {
      // Add to Firestore
      const docRef = await addDoc(collection(this.firestore, 'blogPosts'), newPost);

      // Save the given doc id in interface
      newPost.id = docRef.id
      await setDoc(doc(this.firestore, 'blogPosts', docRef.id), newPost);

      // Add the new post id to topic array
      this.topicService.addBlogPostToTopic(newPost.id, newPost.topicId)

      console.log("Dokument erfolgreich erstellt mit ID: ", docRef.id);
    } catch (e) {
      console.error("Fehler beim Hinzufügen des Dokuments: ", e);
    }
  }

  //
  public getTitleForBlogId(blogId: string): string {
    const blogPost = this.blogPosts().find(post => post.id === blogId);
    return blogPost ? blogPost.title : "";
  }






    //
    updateBlogPost(updatedPost: BlogPost): void {
      // const docRef = this.firestore.collection('blogPosts').doc(updatedPost.id);
      // await docRef.update(updatedPost);
    }
  
    //
    deleteBlogPost(postId: number): void {
      // const docRef = this.firestore.collection('blogPosts').doc(postId);
      // await docRef.delete();
    }
  
    // am besten hier ein topic object übergeben, welches alle zugehörigen blog-post-ids als string hält
    async getBlogPostsByIds(ids: string[]): Promise<BlogPost[]> {
      const blogPosts: BlogPost[] = [];
      for (const id of ids) {
        //  const doc = await this.firestore.collection('blogPosts').doc(id).get().toPromise();
        //   if (doc.exists) {
        //     blogPosts.push(doc.data() as BlogPost);
        //   }
      }
      return blogPosts;
    }
}

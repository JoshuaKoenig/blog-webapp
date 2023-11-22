import { Injectable, signal } from '@angular/core';
import { BlogPost } from '../models/BlogPosts';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // TODO
  // Firebase init
  // Wie kann ich blogPosts eindeutig Topics zuordnen?
  // Evtl einfach Topic lis erstellen, die einfach die jeweiligen BlogPostIds hällt

  // Every database update on collection 'blogPosts' updates this singelton automatically
  public blogPosts = signal<BlogPost[]>([]);

  constructor() { 
  //  this.firestore.collection('blogPosts').valueChanges().subscribe(posts => {
  //    this.blogPosts.set(posts as BlogPost[]);
  //  });
  }

  // Returns: Promise<BlogPost>
  public addBlogPost(newPost: BlogPost): void {
   // await this.firestore.collection('blogPosts').add(newPost);
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

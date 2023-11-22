import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-blog-posts',
  templateUrl: './manage-blog-posts.component.html',
  styleUrls: ['./manage-blog-posts.component.scss']
})
export class ManageBlogPostsComponent {

  // 
  public currentTab = "create"

  //
  public addBlogPostForm = new FormGroup({
    blogPostTitle: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    blogPostContent: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })

  //
  public onSubmit() {

  }

  //
  public activateTab(tab: string) {
    this.currentTab = tab
  }

}

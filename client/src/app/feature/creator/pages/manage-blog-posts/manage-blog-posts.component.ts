import { Component, OnInit, effect } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogPost } from 'src/app/shared/models/BlogPosts';
import { Topic } from 'src/app/shared/models/Topic';
import { BlogService } from 'src/app/shared/services/blog.service';
import { TopicService } from 'src/app/shared/services/topic.service';

@Component({
  selector: 'app-manage-blog-posts',
  templateUrl: './manage-blog-posts.component.html',
  styleUrls: ['./manage-blog-posts.component.scss']
})
export class ManageBlogPostsComponent {

  public topics: Topic[] = []

  //
  private selectedTopicId: string = ""

  constructor(private blogService: BlogService, private topicService: TopicService) {
    effect(() => {
      this.topics = this.topicService.topics()
      console.log(this.topicService.topics())
    });
  }

  // 
  public currentTab = "create"

  //
  public addBlogPostForm = new FormGroup({
    blogPostTitle: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    blogPostSubTitle: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    blogPostContent: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    blogPostTopicId: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  })

  //
  public onSubmit() {

    const newBlogPost: BlogPost =
    {
      // Id is set in blog service
      id: "",
      title: this.addBlogPostForm.value.blogPostTitle!,
      subTitle: this.addBlogPostForm.value.blogPostSubTitle!,
      content: this.addBlogPostForm.value.blogPostContent!,
      topicId: this.selectedTopicId
    }

    this.blogService.addBlogPost(newBlogPost)
  }

  public onChange(topicId: string) {
    this.selectedTopicId = topicId
  }

  //
  public activateTab(tab: string) {
    this.currentTab = tab
  }

}

import { Component, effect } from '@angular/core';
import { Topic } from 'src/app/shared/models/Topic';
import { BlogService } from 'src/app/shared/services/blog.service';
import { TopicService } from 'src/app/shared/services/topic.service';

@Component({
  selector: 'app-topic-blog-table',
  templateUrl: './topic-blog-table.component.html',
  styleUrls: ['./topic-blog-table.component.scss']
})
export class TopicBlogTableComponent {

  //
  public topics: Topic[] = []

  constructor(private topicService: TopicService, private blogService: BlogService)
  {
    effect(() => {
      this.topics = this.topicService.topics()
      console.log(this.topicService.topics())
    });
  }

  //
  public getBlogTitleForId(blogId: string): string
  {
    return this.blogService.getTitleForBlogId(blogId)
  }

}

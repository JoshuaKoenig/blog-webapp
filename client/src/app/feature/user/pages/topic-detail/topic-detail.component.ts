import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'src/app/shared/models/Topic';
import { TopicService } from 'src/app/shared/services/topic.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent {

  //
  public topic:Topic = {id: "", title: "", blogPostIds: []};

  constructor(private route: ActivatedRoute, private topicService: TopicService) {
    this.route.params.subscribe(params => {
      this.topic = this.topicService.getTopic(params['id'])
    });
  }
}

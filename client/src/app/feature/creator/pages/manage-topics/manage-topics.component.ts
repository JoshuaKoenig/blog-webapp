import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Topic } from 'src/app/shared/models/Topic';
import { TopicService } from 'src/app/shared/services/topic.service';

@Component({
  selector: 'app-manage-topics',
  templateUrl: './manage-topics.component.html',
  styleUrls: ['./manage-topics.component.scss']
})
export class ManageTopicsComponent {

  constructor(private topicService: TopicService) { }

  // Whether the dropbox for adding new topics is visible or not
  public isAddNewTopicMode = false

  //
  public addTopicForm = new FormGroup({
    topicTitle: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })

  public onSubmit() {
    const newTopic: Topic =
    {
      // Id is set in blog service
      id: "",
      title: this.addTopicForm.value.topicTitle!,
      blogPostIds: []
    }
    this.topicService.addTopic(newTopic)
    this.isAddNewTopicMode = false
    this.addTopicForm.reset()
  }

}

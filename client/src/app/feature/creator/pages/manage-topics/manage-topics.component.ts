import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-topics',
  templateUrl: './manage-topics.component.html',
  styleUrls: ['./manage-topics.component.scss']
})
export class ManageTopicsComponent {

  // Whether the dropbox for adding new topics is visible or not
  public isAddNewTopicMode = false

  public saveNewTopic()
  {
    this.isAddNewTopicMode = false
  }

}

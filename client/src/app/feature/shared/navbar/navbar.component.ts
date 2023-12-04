import { Component, effect } from '@angular/core';
import { Topic } from 'src/app/shared/models/Topic';
import { TopicService } from 'src/app/shared/services/topic.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // Whether the menu is open or not
  public isMenuOpen = false

  //
  public topics: Topic[] = []

  constructor(private topicService: TopicService) {
    effect(() => {
      this.topics = this.topicService.topics()
    });
  }

  // Switches state of mobile menu
  public switchMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }
}

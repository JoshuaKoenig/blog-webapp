import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss']
})
export class BlogPostCardComponent {

  //
  @Input() blogPostTitle = ""

  //
  @Input() blogPostSubtitle = ""

}

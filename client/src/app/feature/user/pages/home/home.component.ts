import { Component, OnInit, effect } from '@angular/core';
import { BlogPost } from 'src/app/shared/models/BlogPosts';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //
  public blogPosts: BlogPost[] = []

  constructor(private blogService: BlogService) {
    effect(() => {
      this.blogPosts = this.blogService.blogPosts()
      console.log(this.blogService.blogPosts())
    });
  }

  public ngOnInit(): void {


  }

  

}

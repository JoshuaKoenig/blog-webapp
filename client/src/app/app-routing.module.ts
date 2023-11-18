import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/user/pages/home/home.component';
import { BlogPostComponent } from './feature/user/pages/blog-post/blog-post.component';
import { TopicDetailComponent } from './feature/user/pages/topic-detail/topic-detail.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "blog-post",
    component: BlogPostComponent
  },
  {
    path: "topic-detail",
    component: TopicDetailComponent
  },
  {
    path: "",
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

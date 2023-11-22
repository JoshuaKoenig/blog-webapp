import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/user/pages/home/home.component';
import { BlogPostComponent } from './feature/user/pages/blog-post/blog-post.component';
import { TopicDetailComponent } from './feature/user/pages/topic-detail/topic-detail.component';
import { DashboardComponent } from './feature/creator/pages/dashboard/dashboard.component';
import { ManageTopicsComponent } from './feature/creator/pages/manage-topics/manage-topics.component';
import { ManageBlogPostsComponent } from './feature/creator/pages/manage-blog-posts/manage-blog-posts.component';

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
  },
  {
    path: "creator",
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "manage-topics",
        component: ManageTopicsComponent
      },
      {
        path: "manage-blogs",
        component: ManageBlogPostsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

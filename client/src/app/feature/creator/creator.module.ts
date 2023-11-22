import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageBlogPostsComponent } from './pages/manage-blog-posts/manage-blog-posts.component';
import { ManageTopicsComponent } from './pages/manage-topics/manage-topics.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { RouterModule } from '@angular/router';
import { TopicBlogTableComponent } from './components/topic-blog-table/topic-blog-table.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    ManageBlogPostsComponent,
    ManageTopicsComponent,
    DashboardCardComponent,
    TopicBlogTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class CreatorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { TopicDetailComponent } from './pages/topic-detail/topic-detail.component';
import { BlogPostCardComponent } from './components/blog-post-card/blog-post-card.component';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { FeatureModule } from '../feature.module';

@NgModule({
  declarations: [
    HomeComponent,
    BlogPostComponent,
    TopicDetailComponent,
    BlogPostCardComponent,
    BlogPostDetailsComponent,
    TopicCardComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class UserModule { }

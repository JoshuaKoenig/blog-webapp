import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBlogTableComponent } from './topic-blog-table.component';

describe('TopicBlogTableComponent', () => {
  let component: TopicBlogTableComponent;
  let fixture: ComponentFixture<TopicBlogTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicBlogTableComponent]
    });
    fixture = TestBed.createComponent(TopicBlogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

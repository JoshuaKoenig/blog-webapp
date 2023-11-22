import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogPostsComponent } from './manage-blog-posts.component';

describe('ManageBlogPostsComponent', () => {
  let component: ManageBlogPostsComponent;
  let fixture: ComponentFixture<ManageBlogPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageBlogPostsComponent]
    });
    fixture = TestBed.createComponent(ManageBlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

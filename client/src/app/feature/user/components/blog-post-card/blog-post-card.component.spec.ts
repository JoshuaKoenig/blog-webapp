import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostCardComponent } from './blog-post-card.component';

describe('BlogPostCardComponent', () => {
  let component: BlogPostCardComponent;
  let fixture: ComponentFixture<BlogPostCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostCardComponent]
    });
    fixture = TestBed.createComponent(BlogPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

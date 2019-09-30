import { TestBed, async } from '@angular/core/testing';
import { ArticleDetailComponent } from './article-detail.component';

describe('Article Detail Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticleDetailComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ArticleDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  
});

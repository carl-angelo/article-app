import { TestBed, async } from '@angular/core/testing';
import { ArticleListComponent } from './article-list.component';

describe('Article List Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticleListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ArticleListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  
});

import { TestBed, async } from '@angular/core/testing';
import { SearchArticleComponent } from './search-article.component';

describe('Search Article Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchArticleComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SearchArticleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  
});

import { HttpClient, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { of } from 'rxjs';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

function createResponse(body) {
  return of(
    new HttpResponse({ body: JSON.stringify(body) })
  );
}

const articleData = [{ id: 1, userId: 1, title: 'Test 1', body: 'Test body 1' }, { id: 2, userId: 2, title: 'Test 2', body: 'Test body 2' }];
const usersData = [{
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}];

class MockHttp {
  get() {
    return createResponse([]);
  }
}

describe('ArticleService', () => {

  let service: ArticleService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        ArticleService,
        { provide: HttpClient, useClass: MockHttp }
      ]
    });
    http = bed.get(http);
    service = bed.get(ArticleService);
  });

  it('should be created', () => {
    const service: ArticleService = TestBed.get(ArticleService);
    expect(service).toBeTruthy();
  });

  it('should get articles data', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...articleData]));

    service.getArticles().subscribe(response => {
      expect(response.length).toBe(2);
      expect(response.toString()).toEqual(JSON.stringify(articleData));
    });
  });

  it('should get users data', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...usersData]));

    service.getArticles().subscribe(response => {
      expect(response.length).toBe(1);
      expect(response.toString()).toEqual(JSON.stringify(usersData))
    });
  });
});

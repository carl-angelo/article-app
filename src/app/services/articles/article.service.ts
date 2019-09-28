import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../constants';
import { Observable } from 'rxjs';
import { Articles } from '../../interface/articles.interface';
import { Users } from '../../interface/users.interface';
import { ArticleRequest } from '../../interface/article-request.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  postArticles(body: ArticleRequest): Observable<any> {
    return this.http.post(API_URL.article, body);
  }

  getArticles(): Observable<Articles[]> {
    return this.http.get(API_URL.article) as Observable<Articles[]>;
  }

  getUsers(): Observable<Users[]> {
    return this.http.get(API_URL.users) as Observable<Users[]>;
  }
}

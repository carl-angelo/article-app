import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/articles/article.service';
import { Articles } from '../../../interface/articles.interface';
import { MatDialog } from '@angular/material/dialog';
import { ArticleDetailComponent } from '../components/article-detail/article-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Articles[];
  filteredArticle: Articles[];
  userName: string = '';

  constructor(
    private articleService: ArticleService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(value => {
      this.articles = value;
      this.filteredArticle = value;
    });

    const user = JSON.parse(localStorage.getItem('userToken'));
    this.userName = user ? user.username : '';
  }

  addArticle(): void {
    this.dialog.open(ArticleDetailComponent, {data: { mode: 'Add' }});
  }

  handleFormChanges(event: any): void {
    const { searchKey, searchValue } = event;

    if (searchKey !== null || searchKey !== '') {
      if (searchValue === null || searchValue === '') {
        this.filteredArticle = this.articles;
      } else {
        if (searchKey === 'title') this.filteredArticle = this.articles.filter(f => f[searchKey].indexOf(searchValue) > -1);
        else this.filteredArticle = this.articles.filter(f => f[searchKey] == searchValue);
      }
    }
  }

  handleSelectedArticle(event: any): void {
    this.dialog.open(ArticleDetailComponent,
      {data: {
        mode: 'Edit', title: event.title, body: event.body, userId: event.userId, id: event.id
      }}
    );
  }

}

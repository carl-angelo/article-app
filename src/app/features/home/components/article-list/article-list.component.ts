import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Articles } from '../../../../interface/articles.interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: Articles[];
  @Output() selectedArticle: EventEmitter<any> = new EventEmitter();
  breakpoint: number;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 998) ? 12 : 6;
  }

  selectArticle(value: Articles): void {
    this.selectedArticle.emit(value);
  }

  onResize(event: any): void {
    this.breakpoint = (event.target.innerWidth <= 998) ? 12 : 6;
  }

}

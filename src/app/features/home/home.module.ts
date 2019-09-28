import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutesModule } from './home.routes';
import { SharedModule } from '../../shared/shared.module';

/* MATERIAL MODULES */
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

/* Services */
import { ArticleService } from '../../services/articles/article.service';

/* COMPONENTS */
import { HomeComponent } from './containers/home.component';
import { SearchArticleComponent } from './components/search-article/search-article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';


const MATERIAL_MODULES = [
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatDialogModule
];


@NgModule({
  declarations: [
    HomeComponent,
    SearchArticleComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutesModule,
    SharedModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ],
  entryComponents: [
    ArticleDetailComponent
  ],
  providers: [
    ArticleService
  ]
})
export class HomeModule { }

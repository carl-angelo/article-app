import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ArticleService } from '../../../../services/articles/article.service';
import { Articles } from '../../../../interface/articles.interface';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  detailForm: any;
  showLoadingOverlay: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    public dialogRef: MatDialogRef<ArticleDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.detailForm = this.formBuilder.group({
      title: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.detailForm.patchValue({
      title: this.data.title ? this.data.title : '',
      body: this.data.body ? this.data.body : ''
    });
  }  

  submitForm(): void {
    let body = {};
    if(this.detailForm.valid) {
      if (this.data.mode === 'Add') {
        body = {
          title: this.detailForm.value.title,
          body: this.detailForm.value.body,
          userId: 1 // to change
        };
      } else {
        body = {
          id: this.data.id,
          title: this.detailForm.value.title,
          body: this.detailForm.value.body,
          userId: this.data.userId // to change
        };
      }

      this.showLoadingOverlay = true;
      this.articleService.postArticles(body).subscribe(result => {
        console.log(result);
        this.showLoadingOverlay = false;
        this.dialogRef.close();
      });
    }
  }

}

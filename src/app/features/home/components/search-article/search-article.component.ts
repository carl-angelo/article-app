import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.scss']
})
export class SearchArticleComponent implements OnInit {

  @Output() formChanges: EventEmitter<any> = new EventEmitter()
  searchFormGroup: any;
  selectList: any = [
    { key: 'id', value: 'ID' },
    { key: 'userId', value: 'UserId' },
    { key: 'title', value: 'title' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.searchFormGroup = this.formBuilder.group({
      searchValue: new FormControl(null),
      searchKey: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.searchFormGroup.valueChanges.subscribe(value => {
      this.formChanges.emit(value);
    })
  }

  clearSearchValue(): void {
    this.searchFormGroup.patchValue({ searchValue: '' });
  }

}

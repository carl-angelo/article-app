import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

/* Material Modules */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule
];

const SHARED_MODULES = [
  HeaderComponent
];


@NgModule({
  declarations: [
    ...SHARED_MODULES
  ],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    ...SHARED_MODULES
  ]
})
export class SharedModule { }

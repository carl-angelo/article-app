import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutesModule } from './login.routes';
import { LoginComponent } from './containers/login.component';

import { SharedModule } from '../../shared/shared.module';

/* MATERIAL MODULES */
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MATERIAL_MODULES = [
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutesModule,
    SharedModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ]
})
export class LoginModule { }

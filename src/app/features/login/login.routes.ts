import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './containers/login.component';

export const loginRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
  })
export class LoginRoutesModule { }
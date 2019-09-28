import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './containers/home.component';

export const loginRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
  })
export class HomeRoutesModule { }
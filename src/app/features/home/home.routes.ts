import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home.component';
import { NgModule } from '@angular/core';

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
  })
export class HomeRoutesModule { }
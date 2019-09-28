import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAuthGuard } from './guards/login/login-auth.guard';
import { UserAuthGuard } from './guards/user-auth/user-auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        canActivate: [LoginAuthGuard],
        loadChildren: './features/login/login.module#LoginModule'
    },
    {
        path: 'home',
        canActivate: [UserAuthGuard],
        loadChildren: './features/home/home.module#HomeModule'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
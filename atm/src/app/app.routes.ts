import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate:[AuthGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user.page').then( m => m.UserPage),
    canActivate:[AuthGuard]
  },  {
    path: 'google-map',
    loadComponent: () => import('./google-map/google-map.page').then( m => m.GoogleMapPage)
  },

];

import {  Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path:'',
    redirectTo:'main',
    pathMatch:'full',
  },
  {
    path:'main',
    loadChildren: ()=>import('@gifs_ui/route-gifs').then( m => m.routesGifs )

  },
  {
    path:'**',
    redirectTo:'main'
  }
];


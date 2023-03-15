import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const routesGifs: Routes = [
  {
    path:'',
    pathMatch:'full',
    title:'Busqueda Gifs',
    loadComponent:()=>import('./main.component').then( c => c.MainComponent)
  }
];


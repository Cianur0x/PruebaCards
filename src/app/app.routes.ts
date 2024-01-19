import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'lenguajes',
    component: LenguajesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
// hola

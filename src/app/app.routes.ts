import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'salgados',
    loadComponent: () => import('./savory/savory.component').then(m => m.SavoryComponent)
  },
  {
    path: 'doces',
    loadComponent: () => import('./sweet/sweet.component').then(m => m.SweetComponent)
  },
  {
    path: 'receita/:id',
    loadComponent: () => import('./recipe/recipe.component').then(m => m.RecipeComponent)
  }
];

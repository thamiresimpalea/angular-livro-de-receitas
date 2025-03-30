import { inject, Injectable } from '@angular/core';
import { RecipeItem } from '../model/recipe-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  http = inject(HttpClient);
  getRecipes() {
    const url = 'https://api-receitas-pi.vercel.app/receitas/todas';
    return this.http.get<Array<RecipeItem>>(url);
  }
  getRecipesByType(type: string) {
    const url = 'https://api-receitas-pi.vercel.app/receitas/tipo/'+type;
    return this.http.get<Array<RecipeItem>>(url);
  }
  getRecipeById(id: string) {
    const url = 'https://api-receitas-pi.vercel.app/receitas/'+id;
    return this.http.get<RecipeItem>(url);
  }
}

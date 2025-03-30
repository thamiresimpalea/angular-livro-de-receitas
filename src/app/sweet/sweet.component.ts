import { Component, inject, signal } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { RecipeItem } from '../model/recipe-item';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-sweet',
  imports: [],
  templateUrl: './sweet.component.html',
  styleUrl: './sweet.component.scss'
})
export class SweetComponent {
  recipeService = inject(RecipesService);
  allRecipeItems = signal<Array<RecipeItem>>([]);
  error = signal<string>('');

  ngOnInit(): void {
    this.recipeService
      .getRecipesByType('doce')
      .pipe(
        catchError((error) => {
          console.error('Error loading recipes', error);
          throw error;
        })
      )
      .subscribe((recipes) => {
        this.allRecipeItems.set(recipes);
      });
  }
}

import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { RecipeItem } from '../model/recipe-item';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  recipeService = inject(RecipesService);
  id = signal<string>('');
  recipeItem = signal<RecipeItem | null>(null);
  error = signal<string>('');
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.id.set(id || '');
    });

    this.recipeService
      .getRecipeById(this.id())
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error loading recipe', error);
          this.error.set(error.message);
          throw error
        })
      )
      .subscribe((recipe) => {
        this.recipeItem.set(recipe);
      })
  }
}

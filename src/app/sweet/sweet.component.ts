import { Component, inject, signal } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { RecipeItem } from '../model/recipe-item';
import { catchError } from 'rxjs';
import { RecipeItemComponent } from '../components/recipe-item/recipe-item.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sweet',
  imports: [RecipeItemComponent],
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
        catchError((error: HttpErrorResponse) => {
          console.error('Error loading recipes', error);
          this.error.set(error.message)
          throw error;
        })
      )
      .subscribe((recipes) => {
        this.allRecipeItems.set(recipes);
      });
  }
}

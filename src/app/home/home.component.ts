import { Component, inject, signal } from '@angular/core';
import { RecipeItemComponent } from '../components/recipe-item/recipe-item.component';
import { RecipeItem } from '../model/recipe-item';
import { RecipesService } from '../services/recipes.service';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PopularRecipesPipe } from '../pipes/popular-recipes.pipe';

@Component({
  selector: 'app-home',
  imports: [RecipeItemComponent, PopularRecipesPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  recipeService = inject(RecipesService);
  allRecipeItems = signal<Array<RecipeItem>>([]);
  error = signal<string>("");
  ngOnInit(): void {
    this.recipeService
      .getRecipes()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error loading recipes', error);
          throw error
        })
      )
      .subscribe((recipes) => {
        this.allRecipeItems.set(recipes);
      })
  }
}

import { Component, input } from '@angular/core';
import { RecipeItem } from '../../model/recipe-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  imports: [RouterLink],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {
  recipeItem = input.required<RecipeItem>()
}

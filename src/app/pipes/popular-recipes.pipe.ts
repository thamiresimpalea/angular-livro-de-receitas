import { Pipe, PipeTransform } from '@angular/core';
import { RecipeItem } from '../model/recipe-item';

@Pipe({
  name: 'popularRecipes'
})
export class PopularRecipesPipe implements PipeTransform {

  transform(value: RecipeItem[]): RecipeItem[] {
    const populars = [8, 4, 9];
    return value.filter((recipe: RecipeItem): boolean => populars.includes(recipe.id));
  }

}


import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output
} from '@angular/core';

import { Recipe } from '../../_models/recipe.model'

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  @Input() recipeList: Recipe[];

  @Output() onRecipeSelected: EventEmitter<Recipe>;

  private currentRecipe: Recipe;

  constructor() {
    this.onRecipeSelected = new EventEmitter();
  }

  clicked(recipe: Recipe):
  void {
    this.currentRecipe = recipe;
    this.onRecipeSelected.emit(recipe);
  }

  // isSelected(recipe: Recipe):
  // boolean {
  //   if (!recipe || !this.currentRecipe) {
  //     return false;
  //   }
  //   return produ
  // }

}

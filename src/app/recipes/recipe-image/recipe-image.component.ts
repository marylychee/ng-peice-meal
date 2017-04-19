import {
  Component,
  Input,
  HostBinding
} from '@angular/core';

import { Recipe } from '../../_models/recipe.model'

@Component({
  selector: 'recipe-image',
  template: `<img class="recipe-image" src="{{ recipe.imageUrl }}">`
})

export class RecipeImageComponent {
  @Input() recipe: Recipe;
  @HostBinding('attr.class') cssClass = 'ui small image';

}

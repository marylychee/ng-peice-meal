import {
  Component,
  Input,
  HostBinding
} from '@angular/core';

import { Recipe } from '../../recipe.model'

@Component({
  selector: 'recipe-column',
  templateUrl: './recipe-column.component.html',
  styleUrls: ['./recipe-column.component.css']
})
export class RecipeColumnComponent  {
 @Input() recipe: Recipe;
 @HostBinding('attr.class') css
}

import {
  Component,
  EventEmitter
} from '@angular/core';

import { Recipe } from '../../_models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  };

  // recipes: Recipe[];
  //
  // constructor() {
  //   this.recipes = [
  //     new Recipe(
  //       1,
  //       'Fried Chicken Sandwich with Jalapeno Broccoli Slaw and Spicy Mayo',
  //       'New South Food Co',
  //       'http://newsouthfoodcompany.com/fried-chicken-sandwich-with-jalapeno-broccoli-slaw-and-spicy-mayo/',
  //       4,
  //       ['chicken', 'bread', 'flour', 'eggs', 'broccoli slaw', 'jalapeño', 'red onion', 'mayonnaise', 'pickles', 'buttermilk'],
  //       [
  //       {
  //         heading: 'Broccoli Slaw',
  //         steps: ['Combine broccoli slaw, jalapeno, onion and mayonnaise in a small bowl and mix well. Set aside.'],
  //       },{
  //         heading: 'Spicy Mayo',
  //         steps: ['Combine mayonnaise and hot sauce. Set aside']
  //       },{
  //         heading: 'Fried Chicken',
  //         steps: ['Combine flour, pepper, and 1/2 teaspoons salt in a gallon size ziploc bag.', 'Pour buttermilk into bowl.', 'Clean any remaining fat from chicken.', 'Slice the breasts horizontally so that you get 2 pieces from 1 whole chicken breast.', 'Working with 1 piece at a time, dredge chicken in flour mixture, shaking off excess. With your clean hand then dip in buttermilk, allowing excess to drip back into bowl. With your dry hand dredge again in flour mixture, shaking off excess.', 'Do this to all chicken pieces and set aside on a plate while you prepare the oil.', 'Pour oil or shortening into a large heavy skillet to a depth of 1/2-inch.', 'Heat over medium heat until thermometer registers 350°.', 'Fry chicken until golden brown and cooked through, about 5 minutes per side. Transfer to a wire rack set inside a baking sheet; season with kosher salt.', 'You can keep the fried chicken pieces in the oven at 170 degrees f while you fry the remaining pieces', 'Spread cut sides of buns with butter. Heat another large skillet over medium heat. Working in batches, cook buns buttered side down until browned and crisp, about 1 minute.', 'Spread with spicy mayo. Build sandwiches with buns, mayo, chicken, slaw and pickles.']
  //       }
  //     ],
  //     'http://newsouthfoodcompany.com/wp-content/uploads/2013/05/Fried-Chicken-with-Jalapeno-Cole-Slaw-and-Spicy-Mayo.jpg')
  //   ];
  // }
  //
  // recipeWasSelected(recipe: Recipe): void {
  //   console.log('Recipe clicked: ', recipe);
  // }
}

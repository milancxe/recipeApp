import { EventEmitter } from '@angular/core'

import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes',10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    console.log('zvao push');
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients( ingredients: Ingredient[]){
    // for(var i in ingredients){
    //   console.log('adding ingredient: '+ ingredients[i]);
    //   this.addIngredient(ingredients[i]);
    // };
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}

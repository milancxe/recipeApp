import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
                'recept za sniclu',
                'https://upload.wikimedia.org/wikipedia/commons/2/28/Kara%C4%91or%C4%91eva_%C5%A1nicla_with_ajvar.jpg',
                [
                  new Ingredient('meat',1),
                  new Ingredient('French Fries', 20),
                ]
              ),
      new Recipe('Big Fat Burger',
              'mek dolans',
              'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
              [
                new Ingredient('Buns',2),
                new Ingredient('meat',1)
              ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService){};

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}

import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  constructor(private slService: ShoppingListService) { }
  private recipes:Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A tasty recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]
    ),

    new Recipe('Ratatouille',
      'A teasty famous dish',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_3563,h_3563,c_limit/04102023-ratatouille-lede.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    ),
  ];
  getRecipies(){
    return this.recipes.slice()
  }
  getRecipe(index: number){
    return this.recipes[index]
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
}

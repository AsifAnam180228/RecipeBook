import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private slService: ShoppingListService) { }

  recipesChanged = new Subject<Recipe[]>()
  // private recipes:Recipe[] = [
  //   new Recipe(
  //     'A Test Recipe',
  //     'A tasty recipe',
  //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
  //   [
  //     new Ingredient('Meat', 1),
  //     new Ingredient('French Fries', 20)
  //   ]
  //   ),

  //   new Recipe('Ratatouille',
  //     'A teasty famous dish',
  //     'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_3563,h_3563,c_limit/04102023-ratatouille-lede.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1)
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  setRecipes(recipes : Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipies(){
    return this.recipes.slice()
  }

  getRecipe(index: number){
    return this.recipes[index]
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }
  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

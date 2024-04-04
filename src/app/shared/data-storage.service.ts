import { RecipeService } from './../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService : RecipeService
  ) { }

  storeRecipes(){
    const recipes = this.recipeService.getRecipies();
    return this.http.put('https://ng-course-recipe-book-9da7f-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json', recipes).subscribe(
      res =>{
        console.log(res);

      }
    );
  }
}

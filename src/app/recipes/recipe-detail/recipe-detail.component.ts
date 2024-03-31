import {Component, Input, OnInit} from '@angular/core';
// import { SplitButtonModule } from 'primeng/splitbutton';
import {DropdownChangeEvent, DropdownModule} from "primeng/dropdown";
import {Recipe} from "../recipe.model";
import {MenuItem} from "primeng/api";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../shared/ingredient.model";
import {ActivatedRoute, Data, Params, Router} from "@angular/router";
// interface Option{
//   label: string;
//   command?(event : any) : void;
// }
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})


export class RecipeDetailComponent implements OnInit{
  recipe!: Recipe;
  options : MenuItem[] = [];
  selectedOption : MenuItem | undefined;
  id!: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {

    console.log('hello')
    console.log(this.selectedOption)
  }

  ngOnInit(): void {
   this.route.params
     .subscribe(
       (params: Params)=>{
         this.id = +params['id']
         this.recipe = this.recipeService.getRecipe(this.id)
       })

    this.options = [
      {label: 'Hello Shopping List',
        command: (event) =>{
          this.toShoppingList()
        }},
      {label: 'Edit Recipe',
        command: (event) =>{
          this.editRecipe()
        }},
      {
        label: 'Delete Recipe',
        command: (event) =>{
          this.onDeleteRecipe()
        }
        },
    ]
  }

  private toShoppingList() {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  private editRecipe() {
    console.log('edit recipe')
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
    console.log('delete recipe')
  }

  Onchange(event: any) {
    event.value.command(this.selectedOption)
    // console.log(event.value.command())
  }
}

import {Component, Input, OnInit} from '@angular/core';
// import { SplitButtonModule } from 'primeng/splitbutton';
import {DropdownChangeEvent, DropdownModule} from "primeng/dropdown";
import {Recipe} from "../recipe.model";
import {MenuItem} from "primeng/api";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../shared/ingredient.model";
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
  @Input() recipe!: Recipe;
  options : MenuItem[] = [];
  selectedOption : MenuItem | undefined;

  constructor(private recipeSErvice: RecipeService) {

    console.log('hello')
    console.log(this.selectedOption)
  }

  ngOnInit(): void {
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
          this.deleteRecipe()
        }
        },
    ]
  }

  private toShoppingList() {
      this.recipeSErvice.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  private editRecipe() {
    console.log('edit recipe')
  }

  private deleteRecipe() {
    console.log('delete recipe')
  }

  Onchange(event: any) {
    event.value.command(this.selectedOption)
    // console.log(event.value.command())
  }
}

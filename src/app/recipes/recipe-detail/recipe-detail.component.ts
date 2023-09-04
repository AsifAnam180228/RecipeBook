import {Component, Input, OnInit} from '@angular/core';
// import { SplitButtonModule } from 'primeng/splitbutton';
import {DropdownModule} from "primeng/dropdown";
import {Recipe} from "../recipe.model";
import {MenuItem} from "primeng/api";
interface Option{
  label: string;
  command?(event : any) : void;
}
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})


export class RecipeDetailComponent implements OnInit{
  @Input() recipe!: Recipe;
  options : MenuItem[] = [];
  selectedOption : MenuItem | undefined;

  constructor() {
    this.options = [
      {label: 'To Shopping List',
        command: () =>{
        this.toShoppingList()
        }},
      {label: 'Edit Recipe',
        command: () =>{
          this.editRecipe()
        }},
      {label: 'Delete Recipe',
        command: () =>{
          this.deleteRecipe()
        }},

    ]
    console.log('hello')
    console.log(this.selectedOption)
  }

  ngOnInit(): void {

  }

  private toShoppingList() {
    console.log('added to shopping list')
  }

  private editRecipe() {
    console.log('edit recipe')
  }

  private deleteRecipe() {
    console.log('delete recipe')
  }
}

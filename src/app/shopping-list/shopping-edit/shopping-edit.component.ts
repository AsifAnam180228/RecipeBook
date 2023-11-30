import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') slForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedItemIndex !: number;
  editedItem!: Ingredient;
  // @ViewChild('nameInput', {static: true}) nameInputRef!: ElementRef;
  // @ViewChild('amountInput', {static: true}) amountInputRef!: ElementRef;
  constructor(private slService: ShoppingListService) {
  }

  onSubmit(form: NgForm) {
     // const ingName = this.nameInputRef.nativeElement.value;
     // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
     const newIngreident = new Ingredient(value.name,value.amount);
     if (this.editMode){
       this.slService.updateIngredient(this.editedItemIndex, newIngreident)
     }
     else {
       this.slService.addIngredient(newIngreident)
     }
     this.editMode =false
     this.slForm.reset()
  }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number)=>{
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngriedents(index)
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false
  }

  onDelete() {
    this.onClear()
    this.slService.deleteIngredient(this.editedItemIndex)
  }
}

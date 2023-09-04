import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import {RouterLink} from "@angular/router";
import { ButtonModule } from 'primeng/button';
import {RippleModule} from "primeng/ripple";
import { SplitButtonModule } from 'primeng/splitbutton';
import {NgOptimizedImage} from "@angular/common";
import { DropdownDirective } from './shared/dropdown.directive';
import {DropdownModule} from "primeng/dropdown";
import {PaginatorModule} from "primeng/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RouterLink,
    RippleModule,
    SplitButtonModule,
    NgOptimizedImage,
    DropdownModule,
    PaginatorModule,
    BrowserAnimationsModule,
    MenuModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

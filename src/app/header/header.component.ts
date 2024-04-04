import { DataStorageService } from './../shared/data-storage.service';
import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MenuItem, SelectItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @ViewChild('menu') menu: any;
  // @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;
  selectedMenuItem !: string;

  constructor(
    private route: Router,
    private dataStorageService: DataStorageService
    ) {
  }
  menuModel: MenuItem[] = [
    {
      label: 'Recipes',
      command: () => this.route.navigate(['/recipes']),
      // command: () => this.onSelect('recipe'),1
      //
    },
    {
      label: 'Shopping List',
      // command: () => this.onSelect('shopping-list'),
      command: () => this.route.navigate(['/shopping-list']),
    },

  ];
  menuItems: SelectItem[] = [
    {
      label: 'Save Data',
      value: 'save'
    },
    {
      label: 'Fetch Data',
      value: 'fetch'
    }
  ]

  onMenuItemSelected(){
    if(this.selectedMenuItem === 'save'){
      this.onSaveData();
    }
    else if(this.selectedMenuItem === 'fetch'){
      this.onFetchData();
    }
  }
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature)
  //   // this.route.navigate(['/recipes'])
  // }

  onSaveData() {
    console.log('saveData');
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    console.log('fetch Data')
  }
}

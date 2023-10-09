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

  constructor(private route: Router) {
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
      this.saveData();
    }
    else if(this.selectedMenuItem === 'fetch'){
      this.fetchData();
    }
  }
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature)
  //   // this.route.navigate(['/recipes'])
  // }

  private saveData() {
    console.log('saveData')
  }

  private fetchData() {
    console.log('fetch Data')
  }
}

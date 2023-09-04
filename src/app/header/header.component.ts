import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MenuItem, SelectItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @ViewChild('menu') menu: any;
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;
  selectedMenuItem !: string;

  menuModel: MenuItem[] = [
    {
      label: 'Recipes',
      command: () => this.onSelect('recipe'),
    },
    {
      label: 'Shopping List',
      command: () => this.onSelect('shopping-list'),
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
  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }

  private saveData() {
    console.log('saveData')
  }

  private fetchData() {
    console.log('fetch Data')
  }
}

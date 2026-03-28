import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  state,
} from '@angular/animations';
import { Router } from '@angular/router';
import { SidebarLogic } from '../../class/sidebarLogic';
import { ItemMenu } from '../models/ItemMenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('rotateDownUp', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(180deg)' })),
      transition('false <=> true', animate('0.2s linear')),
    ]),
  ],
})
export class SidebarComponent {
  public sidebarlogic: SidebarLogic = new SidebarLogic();
  public menuItems: ItemMenu[] = [];

  constructor(private router: Router) {}

  public navegation(url: string, data: any) {}

  public toggleDropdown() {
    this.sidebarlogic.toggleDropdown();
  }

  public toggleSidebar() {
    this.sidebarlogic.toggleSidebar();
  }

  get sidebarVisible() {
    return this.sidebarlogic.sidebarVisible;
  }

  get dropdownVisible() {
    return this.sidebarlogic.dropdownVisible;
  }
  public cerrarMenu(index: number) {
    this.sidebarlogic.toggleSection(index);
  }
}

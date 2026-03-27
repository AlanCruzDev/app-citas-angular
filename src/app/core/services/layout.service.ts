import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }


  isSidebarPinned = false;
  isSidebarToggeled = false;

  public toggleSidebar() {
    this.isSidebarToggeled = !this.isSidebarToggeled;
  }


  public getSidebarStat() {
    return {
      isSidebarPinned: this.isSidebarPinned,
      isSidebarToggeled: this.isSidebarToggeled,
    };
  }
}

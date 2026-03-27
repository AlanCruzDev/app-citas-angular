import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  public esDispositivoMovil!: boolean;

  constructor(
    private layoutservice: LayoutService,
    private router: Router,
  ) {
    this.detectarDispositivoMovil();
  }

  public getClasses() {
    let bnd = this.layoutservice.getSidebarStat().isSidebarToggeled;
    const classes = {
      'menu-sidebar': this.layoutservice.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': !this.esDispositivoMovil ? bnd : !bnd,
    };
    return classes;
  }

  private detectarDispositivoMovil() {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      this.esDispositivoMovil = true;
    } else {
      this.esDispositivoMovil = false;
    }
    mediaQuery.addListener((event) => {
      if (event.matches) {
        this.esDispositivoMovil = true;
      } else {
        this.esDispositivoMovil = false;
      }
    });
  }

  public toggleSidebar() {
    this.layoutservice.toggleSidebar();
  }
}

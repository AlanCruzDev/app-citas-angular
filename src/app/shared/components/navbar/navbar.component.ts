import { Component } from '@angular/core';
import { LayoutService } from 'src/app/core/services/layout.service';
import {trigger,style,animate,transition,state,} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
   animations:[
    trigger('rotateAnimation',[
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(180deg)' })),
      transition('false <=> true', animate('0.2s linear'))
    ])
  ]
})
export class NavbarComponent {

    public isCollapsed:boolean = true;
  public showLogoContainer: boolean = true;
  public esDispositivoMovil!: boolean;
  constructor(
    private layoutservice:LayoutService,
  ){}


  ngOnInit(){

  }

  public toggleSidebar() {
    this.layoutservice.toggleSidebar();
  }

  public getClasses() {
    this.showLogoContainer=this.layoutservice.getSidebarStat().isSidebarToggeled;

    if(!this.esDispositivoMovil){
      this.showLogoContainer=!this.showLogoContainer;
    }


    return this.showLogoContainer;
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


}

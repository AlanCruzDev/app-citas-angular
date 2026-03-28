import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, SharedModule, MenuRoutingModule],
})
export class MenuModule {}

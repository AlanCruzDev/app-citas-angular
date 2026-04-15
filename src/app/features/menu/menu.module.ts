import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';
import { ServiciosComponent } from './pages/catalogos/servicios/servicios.component';
import { AddServiciosComponent } from './pages/catalogos/add-servicios/add-servicios.component';
import { ConsultaCitasComponent } from './pages/citas/consulta-citas/consulta-citas.component';
import { PerfilComponent } from './pages/configuracion/perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './componentes/modal/modal.component';

import { UsuariosModule } from './pages/usuarios/nuevo/usuarios.module';

@NgModule({
  declarations: [
    LayoutComponent,
    ServiciosComponent,
    AddServiciosComponent,
    ConsultaCitasComponent,
    PerfilComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UsuariosModule
  ],
})
export class MenuModule {}

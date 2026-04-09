import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { NgModule } from '@angular/core';
import { ServiciosComponent } from './pages/catalogos/servicios/servicios.component';
import { AddServiciosComponent } from './pages/catalogos/add-servicios/add-servicios.component';
import { PerfilComponent } from './pages/configuracion/perfil/perfil.component';
import { ConsultaCitasComponent } from './pages/citas/consulta-citas/consulta-citas.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'citas/lista',
        pathMatch: 'full',
      },
      {
        path: 'catalogo/servicios',
        component: ServiciosComponent,
      },
      {
        path: 'catalogo/agregar/servicios',
        component: AddServiciosComponent,
      },
      {
        path: 'citas/lista',
        component: ConsultaCitasComponent,
      },
      {
        path: 'configuracion/perfil',
        component: PerfilComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}

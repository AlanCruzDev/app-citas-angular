// auth-routing.module.ts (o login-routing.module.ts)
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // 🔥 CORRECTO
  exports: [RouterModule]
})
export class LoginRoutingModule {}

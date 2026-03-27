// auth-routing.module.ts (o login-routing.module.ts)
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-pages/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // 🔥 CORRECTO
  exports: [RouterModule]
})
export class LoginRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'index',
    loadChildren: () =>
      import('./features/menu/menu.module').then((m) => m.MenuModule),
  },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

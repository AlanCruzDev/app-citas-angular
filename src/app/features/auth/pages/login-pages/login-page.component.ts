import { Component } from '@angular/core';
import { LoginRequest } from '../../models/LoginRequest'; //se importo el loginrequest

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  numPhone: string = '';
  password: string = '';

  //se cambio el parametro y ya recibe el loginrequest
  setInfoLogin(e: LoginRequest) {
    this.numPhone = e.numPhone;
    this.password = e.password;

    console.log('se recibio el numero:', this.numPhone);
    console.log('se recibio la contraseña:', this.password);
  }
}

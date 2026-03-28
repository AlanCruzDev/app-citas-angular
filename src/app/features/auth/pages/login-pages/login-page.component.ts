import { Component } from '@angular/core';
import { LoginRequest } from '../../models/LoginRequest'; //se importo el loginrequest
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  numPhone: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private route: Router,
  ) {}

  //se cambio el parametro y ya recibe el loginrequest
  public setInfoLogin(e: LoginRequest) {
    this.numPhone = e.numPhone;
    this.password = e.password;
    this.auth.login(this.numPhone, this.password).subscribe({
      next: (value) => {
        if (value.success == true) {
          this.guardarSession(value.data.id, value.data);
          // mandamos a otra ruta del menu
        } else {
          alert(value.message);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });

    console.log('se recibio el numero:', this.numPhone);
    console.log('se recibio la contraseña:', this.password);
  }

  public guardarSession(key: string, data: any) {
    sessionStorage.removeItem('session_key');
    sessionStorage.setItem('session_key', key);

    sessionStorage.removeItem('session_user');
    sessionStorage.setItem('session_user', JSON.stringify(data));
    sessionStorage.setItem('url', 'login');
  }
}

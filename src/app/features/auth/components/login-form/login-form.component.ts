import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/LoginRequest'; //Importe el login.request

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  //Se mandan a llamar las variables desde el LoginRequest, ya no necesito especificar que tipo variables son, ya lo haces desde el request.
  @Output() loginSubmit = new EventEmitter<LoginRequest>();

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      numPhone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public soloNumeros(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    event.target.value = event.target.value.slice(0, 10);
  }

  //metodo para que el cuando presiones el boton mande la informacion al  padre
  public onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    //Manda los datos al componente padre cuando ocurre el evento de dar click en btn iniciar sesión
    this.loginSubmit.emit(this.loginForm.value);
    this.loginForm.reset();
  }
}


import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/LoginRequest'; //Importe el login.request



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

})
export class LoginFormComponent {

  //Se mandan a llamar las variables desde el LoginRequest, ya no necesito especificar que tipo variables son.
  @Output() loginSubmit = new EventEmitter<LoginRequest>(); 
  
  loginForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      numPhone: ['', [Validators.required,
      Validators.pattern("^[0-9]*$"), //Validar que solo se acepten números
      Validators.maxLength(10),
      Validators.minLength(10)
      ]],
      //Valida que sean minimo 8 caracteres la contraseña
      password: ['', [Validators.required,
      Validators.minLength(8)
      ]]


    })
  }



  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    //Manda los datos al componente padre cuando ocurre el evento de dar click en btn iniciar sesión
    this.loginSubmit.emit(this.loginForm.value);

    console.log('Usuario: ', this.loginForm.value);
    this.loginForm.reset();
  }
}




import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

})
export class LoginFormComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder ){
    this.loginForm = this.fb.group({
      numPhone: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(10),
        Validators.minLength(10)
      ]],
      password: ['', [ Validators.required,
        Validators.minLength(8)
      ]]


    })
  }
onSubmit() : void {
  if(this.loginForm.invalid){
    return;
  }
console.log('Usuario: ',this.loginForm.value);
this.loginForm.reset();
}
}
  



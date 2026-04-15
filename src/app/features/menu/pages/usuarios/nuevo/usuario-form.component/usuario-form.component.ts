import { Component, inject, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, ValidationErrors, Validators, NonNullableFormBuilder } from '@angular/forms';
import { Usuario } from '../models/usuarioM';

type UsuarioForm = FormGroup<{
  idUsuario: FormControl<number>,
  nombre: FormControl<string>,
  telefono: FormControl<string>,
  email: FormControl<string>,
  password: FormControl<string>,
  fecha_creacion: FormControl<string>,
  recibe_citas: FormControl<boolean>,
  rol: FormControl<string>,
  negocio_id: FormControl<number>,
  hora_cierre: FormControl<string>,
  hora_inicio: FormControl<string>,
  activo: FormControl<boolean>
}>

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],

})

export class UsuarioFormComponent {
  @Output() agregarUsuario = new EventEmitter<Usuario>();

  @Input() set editarUsuario(usuario: Usuario | null) {
    if (usuario !== null) {
      this.form.patchValue(usuario);
      this.form.get('password')?.setValue('');
    }

  }

  formBuilder = inject(NonNullableFormBuilder);

  form: UsuarioForm = this.formBuilder.group({
    idUsuario: this.formBuilder.control(0),
    nombre: this.formBuilder.control('', [Validators.required]),
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    telefono: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
    fecha_creacion: this.formBuilder.control(''),
    recibe_citas: this.formBuilder.control(false),
    rol: this.formBuilder.control('', [Validators.required]),
    negocio_id: this.formBuilder.control(0),
    hora_cierre: this.formBuilder.control('', [Validators.required]),
    hora_inicio: this.formBuilder.control('', [Validators.required]),
    activo: this.formBuilder.control(true)
  }, { validators: [this.horaInvalida] });

  public crearUsuario(): void {
    if (this.form.invalid) {
      return;
    }
    this.agregarUsuario.emit(this.form.getRawValue());
    this.form.reset({
      idUsuario: 0,
      nombre: '',
      telefono: '',
      email: '',
      password: '',
      fecha_creacion: '',
      recibe_citas: false,
      rol: '',
      negocio_id: 0,
      hora_cierre: '',
      hora_inicio: '',
      activo: false
    });

  }

  public soloNumeros(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    event.target.value = event.target.value.slice(0, 10);
  }

  public formatoHorarios(event: any) {
    let v = event.target.value.replace(/[^0-9]/g, '');
    if (v.length > 4) v = v.slice(0, 4);

    if (v.length >= 2) {
      let horas = parseInt(v.slice(0, 2));
      if (horas > 23) v = '23' + v.slice(2);
    }

    if (v.length >= 4) {
      let minutos = parseInt(v.slice(2, 4));
      if (minutos > 59) v = v.slice(0, 2) + '59';
    }

    if (v.length > 2) {
      v = v.slice(0, 2) + ':' + v.slice(2);
    }
    event.target.value = v;
  }


  horaInvalida(control: AbstractControl): ValidationErrors | null {
    const inicio = control.get('hora_inicio')?.value;
    const cierre = control.get('hora_cierre')?.value;
    if (!inicio || !cierre) return null;
    return cierre <= inicio ? { horarioInvalido: true } : null;
  }

  corregirHora(event: any, horaValida: string) {
    let v = event.target.value;
    if (v.length === 1) v = '0' + v + ':00';

    if (v.length === 2) v = v + ':00';

    if (v.length === 4) v = v + '0';

    this.form.get(horaValida)?.setValue(v);
  }

}

import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ServiosService } from '../../../services/servios.service';

type ServicioForm = FormGroup<{
  nomServicio: FormControl<string>;
  infoServicio: FormControl<string>;
  precio: FormControl<number>;
  duracionMin: FormControl<number>;
}>;

type Form = FormGroup<{
  usuario: FormControl<string>;
  servicio: FormArray<ServicioForm>;
}>;

@Component({
  selector: 'app-add-servicios',
  templateUrl: './add-servicios.component.html',
  styleUrls: ['./add-servicios.component.css'],
})
export class AddServiciosComponent {
  formBuilder = inject(NonNullableFormBuilder);

  constructor(private servicioService: ServiosService) {}

  get servicioArray(): FormArray<ServicioForm> {
    return this.form.get('servicio') as FormArray<ServicioForm>;
  }

  form: Form = this.formBuilder.group({
    usuario: this.formBuilder.control(''),
    servicio: this.formBuilder.array<ServicioForm>([this.crearServicio()]),
  });

  crearServicio(): ServicioForm {
    return this.formBuilder.group({
      nomServicio: this.formBuilder.control('', [Validators.required]),
      infoServicio: this.formBuilder.control('', [Validators.required]),
      // Aquí bloqueamos los negativos 
      precio: this.formBuilder.control(0, [
        Validators.required,
        Validators.min(0),
      ]),
      duracionMin: this.formBuilder.control(0, [
        Validators.required,
        Validators.min(1),
      ]),
    });
  }

  public agregarServicio() {
    this.servicioArray.push(this.crearServicio());
  }

  public guardarServicio(): void {
    let { servicio } = this.form.value;

    const nuevoServicio = servicio?.map((item) => ({
      ...item,
      idNegocio: 1,
      idUsuario: 2,
    }));

    this.servicioService.agregarServicios(nuevoServicio).subscribe({
      next: (value) => {
        console.log(value);

        if (value.success == true) {
          alert(value.message);
        } else {
          alert('ERROR');
        }
      },
      error: (error) => {
        console.log(`${error}`);
      },
    });
  }

  public eliminarServicio(index: number) {
    this.servicioArray.removeAt(index);
  }

  public soloNumeros(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    event.target.value = event.target.value.slice(0, 10);
  }
}

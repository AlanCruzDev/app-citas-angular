import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ServiciosInfoModule } from './models/ServiciosInfo';


type ServicioForm = FormGroup<{
nomServicio: FormControl<string>,
infoServicio: FormControl<string>,
precio: FormControl<number>,
duracionMin: FormControl<number>
}>;


type Form = FormGroup<{
  usuario: FormControl<string>;
  servicio: FormArray<ServicioForm>;
}>;


@Component({
  selector: 'app-add-servicios',
  templateUrl: './add-servicios.component.html',
  styleUrls: ['./add-servicios.component.css']
})


export class AddServiciosComponent {

servicio: ServiciosInfoModule[] = [{
    nomServicio: 'Corte de cabello',
    infoServicio: 'Corte moderno con lavado facial',
    precio: 200,
    duracionMin: 60
  }];

  formBuilder = inject(NonNullableFormBuilder);

  get servicioArray(): FormArray<ServicioForm>{
    return this.form.get('servicio') as FormArray<ServicioForm>;
  }

    form: Form = this.formBuilder.group({
    usuario: this.formBuilder.control(''),
    servicio: this.formBuilder.array<ServicioForm>([this.crearServicio()])
  });

  crearServicio(): ServicioForm{
    return this.formBuilder.group({
    nomServicio: this.formBuilder.control('', [Validators.required]),
    infoServicio: this.formBuilder.control('', [Validators.required]),
    // Aquí bloqueamos los negativos a nivel lógico
    precio: this.formBuilder.control(0, [Validators.required, Validators.min(0)]),
    duracionMin: this.formBuilder.control(0, [Validators.required, Validators.min(1)])
  });
  }

  agregarServicio(){
    this.servicioArray.push(this.crearServicio());
  }
  guardarServicio(): void{
    console.log(this.form.value);
   
  }

  eliminarServicio(index: number){
    this.servicioArray.removeAt(index);

  }

  public soloNumeros(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    event.target.value = event.target.value.slice(0, 10);
  }

}

import { Component } from '@angular/core';
import { Servicios } from '../models/Servicios';
import { ServiosService } from '../../../services/servios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent {
  public listaServicios: Servicios[] = [];
  public editIndex: number | null = null;

  constructor(private servicioService: ServiosService) {
    this.servicioService.obtenerListaServicios(1, 2).subscribe({
      next: (value) => {
        this.listaServicios = [...value];
      },
      error: (error) => {
        this.listaServicios = [];
      },
    });
  }

  editar(index: number) {
    this.editIndex = index;
  }

  guardar() {
    this.editIndex = null;
  }

  public soloNumeros(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    event.target.value = event.target.value.slice(0, 10);
  }
}

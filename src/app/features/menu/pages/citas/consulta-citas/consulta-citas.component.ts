import { Component } from '@angular/core';
import { CitasService } from '../../../services/citas.service';
import { Citas } from 'src/app/core/Models/Citas';
import { ServiosService } from '../../../services/servios.service';
import { Servicios } from '../../catalogos/models/Servicios';

@Component({
  selector: 'app-consulta-citas',
  templateUrl: './consulta-citas.component.html',
  styleUrls: ['./consulta-citas.component.css'],
})
export class ConsultaCitasComponent {
  public servicioSeleccionado: number | null = null;
  public citasPendientes: Citas[] = [];
  public serviciosListas: Servicios[] = [];
  public isModalOpen: boolean = false;

  constructor(
    private citasServices: CitasService,
    private servicio: ServiosService,
  ) {
    this.obtenerCitasPendientes();
  }

  public obtenerCitasPendientes() {
    this.citasServices.obtenerCitasPendientes(1, 2).subscribe({
      next: (value: any) => {
        this.citasPendientes = value;

        console.log(this.citasPendientes);
      },
    });
  }

  public getClaseCita(cita: Citas): string {
    const ahora = new Date();
    const inicio = this.getFechaHora(cita);

    const diffMin = (inicio.getTime() - ahora.getTime()) / (1000 * 60);

    if (diffMin <= 0) {
      return 'pasada';
    }

    if (diffMin <= 30) {
      return 'proxima'; // 🔥 como la azul
    }

    return 'normal';
  }

  public getFechaHora(cita: Citas): Date {
    return new Date(`${cita.fecha}T${cita.horaInicio}`);
  }

  public formatearHora(hora: string): string {
    const [h, m] = hora.split(':');
    let hour = parseInt(h, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    return `${hour}:${m} ${ampm}`;
  }

  public obtenerSerivios() {
    this.servicio.obtenerListaServicios(1, 2).subscribe({
      next: (value) => {
        this.serviciosListas = value;
        this.isModalOpen = true;
      },
    });
  }

  public seleccionarServicio(id: number) {
    this.servicioSeleccionado = id;
  }

  public guardarCita() {
    let citaBody = {
      idUsuario: 2,
      idNegocio: 1,
      idSerivio: this.servicioSeleccionado,
    };
    this.citasServices.crearCitasRapidas(citaBody).subscribe({
      next: (value: any) => {
        alert(value);
        this.obtenerCitasPendientes();
      },
    });
  }

  abrirModal() {
    this.obtenerSerivios();
  }

  cerrarModal() {
    this.isModalOpen = false;
  }
}

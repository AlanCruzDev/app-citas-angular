import { Component } from '@angular/core';
import { CitasService } from '../../../services/citas.service';
import { Citas } from 'src/app/core/Models/Citas';
import { ServiosService } from '../../../services/servios.service';
import { Servicios } from '../../catalogos/models/Servicios';
import { EstadoCita } from 'src/app/core/Models/EstadoCita';

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

  ngOnInit(): void {
    setInterval(() => {
      this.actualizarEstados();
    }, 30000);
  }

  public actualizarEstados() {
    const ahora = new Date();

    this.citasPendientes.forEach((cita) => {
      const inicio = this.getFechaHora(cita);
      const fin = new Date(`${cita.fecha}T${cita.horaFin}`);

      if (ahora > fin && cita.estado !== EstadoCita.COMPLETADA) {
        cita.estado = EstadoCita.EN_ESPERA;
        return;
      }

      if (ahora >= inicio && ahora <= fin) {
        cita.estado = EstadoCita.EN_CURSO;
        return;
      }

      if (ahora < inicio) {
        cita.estado = EstadoCita.PENDIENTE;
      }
    });

    const pendientes = this.citasPendientes
      .filter((c) => c.estado === EstadoCita.PENDIENTE)
      .sort((a, b) => {
        const fechaA = this.getFechaHora(a).getTime();
        const fechaB = this.getFechaHora(b).getTime();
        return fechaA - fechaB;
      });

    if (pendientes.length > 0) {
      pendientes[0].estado = EstadoCita.PROXIMA;
    }

    // refrescar UI
    this.citasPendientes = [...this.citasPendientes];
  }

  public obtenerCitasPendientes() {
    this.citasServices.obtenerCitasPendientes(1, 2).subscribe({
      next: (value: any) => {
        this.citasPendientes = value;
      },
    });
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
        this.cerrarModal();
        this.obtenerCitasPendientes();
      },
    });
  }

  public abrirModal() {
    this.obtenerSerivios();
  }

  public cerrarModal() {
    this.isModalOpen = false;
  }
}

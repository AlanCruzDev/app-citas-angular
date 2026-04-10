import { Cliente } from './Cliente';
import { EstadoCita } from './EstadoCita';
import { Servicios } from './Servicios';

export class Citas {
  public id: number = 0;
  public fecha: string = '';
  public horaInicio: string = '';
  public horaFin: string = '';
  public estado!: EstadoCita;
  public cliente?: Cliente;
  public servicio!: Servicios;

  constructor() {}
}

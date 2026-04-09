import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentDeveloper } from 'src/environments/enviroment.developer';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  constructor(private http: HttpClient) {}

  public obtenerCitasPendientes(idnegocio: number, idUsuario: number) {
    return this.http.get(
      `${environmentDeveloper.endpoint}/citas/del/dia/${idnegocio}/${idUsuario}`,
      {
        responseType: 'json',
      },
    );
  }

  public crearCitasRapidas(input: any) {
    return this.http.post(
      `${environmentDeveloper.endpoint}/citas/crear/rapido`,
      input,
    );
  }
}

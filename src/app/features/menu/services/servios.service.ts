import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentDeveloper } from 'src/environments/enviroment.developer';

@Injectable({
  providedIn: 'root',
})
export class ServiosService {
  constructor(private http: HttpClient) {}

  public obtenerListaServicios(
    idnegocio: number,
    idUsuario: number,
  ): Observable<any> {
    return this.http.get(
      `${environmentDeveloper.endpoint}/servicio/${idnegocio}/${idUsuario}`,
      {
        responseType: 'json',
      },
    );
  }

  public agregarServicios(body: any): Observable<any> {
    return this.http.post(
      `${environmentDeveloper.endpoint}/servicio/guardar`,
      body,
    );
  }
}

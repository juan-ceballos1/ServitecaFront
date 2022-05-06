import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TipoAsistencia } from '../model/tipoasistencia';

@Injectable({
  providedIn: 'root'
})
export class TipoAsistenciaService {

  constructor(private httpService: HttpService) { }

  public consultar(): Observable<TipoAsistencia[]> {
    return this.httpService.doGet<TipoAsistencia[]>(`${environment.endpoint}/tipoasistencia`);
  }

  public crearTipoAsistencia(vehiculo: TipoAsistencia): Observable<number> {
    return this.httpService.doPost<TipoAsistencia, number>(`${environment.endpoint}/tipoasistencia`, vehiculo);
  }

  public eliminarTipoAsistencia(id: number): Observable<TipoAsistencia> {
    return this.httpService.doDelete(`${environment.endpoint}/tipoasistencia/${id}`);
  }
}

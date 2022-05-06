import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Asistencia } from '../model/asistencia';
import { DtoAsistencia } from '../model/dtoasistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private httpService: HttpService) { }

  public consultar(): Observable<DtoAsistencia[]> {
    return this.httpService.doGet<DtoAsistencia[]>(`${environment.endpoint}/asistencia`);
  }

  public crearAsistencia(asistencia: Asistencia): Observable<number> {
    return this.httpService.doPost<Asistencia, number>(`${environment.endpoint}/asistencia`, asistencia);
  }

  public eliminarAsistencia(id: number): Observable<Asistencia> {
    return this.httpService.doDelete(`${environment.endpoint}/asistencia/${id}`);
  }
}

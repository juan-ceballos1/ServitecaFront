import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Vehiculo } from '../model/vehiculo';

@Injectable()
export class VehiculoService {

  constructor(private httpService: HttpService) { }

  public consultar(): Observable<Vehiculo[]> {
    return this.httpService.doGet<Vehiculo[]>(`${environment.endpoint}/vehiculos`);
  }

  public crearVehiculo(vehiculo: Vehiculo): Observable<number> {
    return this.httpService.doPost<Vehiculo, number>(`${environment.endpoint}/vehiculos`, vehiculo);
  }

  public eliminarVehiculo(id: number): Observable<Vehiculo> {
    return this.httpService.doDelete(`${environment.endpoint}/vehiculos/${id}`);
  }
}

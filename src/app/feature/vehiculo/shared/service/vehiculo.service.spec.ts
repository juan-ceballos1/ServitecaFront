import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { VehiculoService } from './vehiculo.service';
import { environment } from 'src/environments/environment.prod';
import { Vehiculo } from '../model/vehiculo';
import { HttpResponse } from '@angular/common/http';

describe('VehiculoService', () => {
  let service: VehiculoService;
  
  let httpTestingController:HttpTestingController;
  const apiEndpointVehiculo= `${environment.endpoint}/vehiculos`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculoService, HttpService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(VehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia obtener todos los vehiculos', () => {
    const dummyVehiculo:Vehiculo[] =[
      {id:1,matricula:"4fewc",marca:"NISSAN",modelo:"CENTRA"},
      {id:2,matricula:"jnklmce",marca:"RENAULT",modelo:"9"}
    ];
    
    service.consultar().subscribe(vehiculo=>{
      expect(vehiculo.length).toBe(2);
      expect(vehiculo).toEqual(dummyVehiculo);
    })

    const req =httpTestingController.expectOne(apiEndpointVehiculo);
    expect(req.request.method).toBe('GET');
    req.flush(dummyVehiculo);

  });

  it('deberia crear un vehiculo', () => {
    const dummyVehiculo:Vehiculo= {id:1,matricula:"4fewc",marca:"NISSAN",modelo:"CENTRA"}
     service.crearVehiculo(dummyVehiculo).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpTestingController.expectOne(apiEndpointVehiculo);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia eliminar un tipo asistencia', () => {
    const id=1;
    const dummyVehiculo:Vehiculo= {id:1,matricula:"4fewc",marca:"NISSAN",modelo:"CENTRA"}

    service.eliminarVehiculo(id).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyVehiculo);
    });
    const req = httpTestingController.expectOne(`${apiEndpointVehiculo}/`+id);
    expect(req.request.method).toBe('DELETE');
  });
});

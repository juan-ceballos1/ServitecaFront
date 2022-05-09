import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment.prod';
import { Asistencia } from '../model/asistencia';
import { DtoAsistencia } from '../model/dtoasistencia';

import { AsistenciaService } from './asistencia.service';

describe('AsistenciaService', () => {
  let service: AsistenciaService;
  let httpTestingController:HttpTestingController;
  const apiEndpointAsistencia= `${environment.endpoint}/asistencia`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsistenciaService,HttpService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia obtener todas las asistencias', () => {
    const dummyAsistencias:DtoAsistencia[] =[
      {id:1,tipoAsistencia:{id:1,nombre:'LAVADO'},vehiculo:{id:1,matricula:'5678j',marca:'NISSAN',modelo:'CENTRA'},fechaInicio: new Date(),fechaFin: new Date(), precio:6789},
      {id:2,tipoAsistencia:{id:1,nombre:'CAMBIO DE ACEITE'},vehiculo:{id:1,matricula:'5678j',marca:'NISSAN',modelo:'CENTRA'},fechaInicio: new Date(),fechaFin: new Date(), precio:234}
    ];
    
    service.consultar().subscribe(asistencias=>{
      expect(asistencias.length).toBe(2);
      expect(asistencias).toEqual(dummyAsistencias);
    })

    const req =httpTestingController.expectOne(apiEndpointAsistencia);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAsistencias);

  });

  it('deberia crear una asstencia', () => {
    const dummyAsistencia:Asistencia ={id:1,idTipoAsistencia:1,idVehiculo:1,fechaInicio:new Date(),fechaFin:new Date(),precio:5678};
    service.crearAsistencia(dummyAsistencia).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpTestingController.expectOne(apiEndpointAsistencia);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia eliminar una asistencia', () => {
    const id=1;
    const dummyAsistencia:Asistencia ={id:1,idTipoAsistencia:1,idVehiculo:1,fechaInicio:new Date(),fechaFin:new Date(),precio:5678};

    service.eliminarAsistencia(id).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyAsistencia);
    });
    const req = httpTestingController.expectOne(`${apiEndpointAsistencia}/`+id);
    expect(req.request.method).toBe('DELETE');
  });
});

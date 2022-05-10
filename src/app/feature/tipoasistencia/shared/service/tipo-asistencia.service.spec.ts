import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { TipoAsistenciaService } from './tipo-asistencia.service';
import { environment } from 'src/environments/environment.prod';
import { TipoAsistencia } from '../model/tipoasistencia';
import { HttpResponse } from '@angular/common/http';

describe('TipoAsistenciaService', () => {
  let service: TipoAsistenciaService;
  let httpTestingController:HttpTestingController;
  const apiEndpointTipoAsistencia= `${environment.endpoint}/tipoasistencia`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TipoAsistenciaService, HttpService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TipoAsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia obtener todos los tipos asistencia', () => {
    const dummyTipoAsistencia:TipoAsistencia[] =[
      {id:1,nombre:"LAVADO"},
      {id:1,nombre:"REPARACION"}
    ];
    
    service.consultar().subscribe(tipoAsistencia=>{
      expect(tipoAsistencia.length).toBe(2);
      expect(tipoAsistencia).toEqual(dummyTipoAsistencia);
    })

    const req =httpTestingController.expectOne(apiEndpointTipoAsistencia);
    expect(req.request.method).toBe('GET');
    req.flush(dummyTipoAsistencia);

  });

  it('deberia crear un tipo asstencia', () => {
    const dummyTipoAsistencia:TipoAsistencia= {id:1,nombre:"LAVADO"} 
     service.crearTipoAsistencia(dummyTipoAsistencia).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpTestingController.expectOne(apiEndpointTipoAsistencia);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia eliminar un tipo asistencia', () => {
    const id=1;
    const dummyTipoAsistencia:TipoAsistencia= {id:1,nombre:"LAVADO"} 

    service.eliminarTipoAsistencia(id).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyTipoAsistencia);
    });
    const req = httpTestingController.expectOne(`${apiEndpointTipoAsistencia}/`+id);
    expect(req.request.method).toBe('DELETE');
  });
});

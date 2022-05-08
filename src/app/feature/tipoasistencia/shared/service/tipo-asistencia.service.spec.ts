import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { TipoAsistenciaService } from './tipo-asistencia.service';

describe('TipoAsistenciaService', () => {
  let service: TipoAsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TipoAsistenciaService, HttpService]
    });
    service = TestBed.inject(TipoAsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

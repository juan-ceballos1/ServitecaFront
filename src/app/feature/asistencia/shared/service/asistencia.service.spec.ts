import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { AsistenciaService } from './asistencia.service';

describe('AsistenciaService', () => {
  let service: AsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsistenciaService, HttpService]
    });
    service = TestBed.inject(AsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

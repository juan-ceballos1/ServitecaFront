import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaService } from '../../shared/service/asistencia.service';
import { RouterTestingModule } from '@angular/router/testing';

import { ListarAsistenciaComponent } from './listar-asistencia.component';
import { HttpService } from '@core/services/http.service';

describe('ListarAsistenciaComponent', () => {
  let component: ListarAsistenciaComponent;
  let fixture: ComponentFixture<ListarAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAsistenciaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers:[AsistenciaService,HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});

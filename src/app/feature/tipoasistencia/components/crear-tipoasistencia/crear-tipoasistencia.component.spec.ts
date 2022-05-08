import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { TipoAsistenciaService } from '../../shared/service/tipo-asistencia.service';

import { CrearTipoasistenciaComponent } from './crear-tipoasistencia.component';

describe('CrearTipoasistenciaComponent', () => {
  let component: CrearTipoasistenciaComponent;
  let tipoAsistenciaService: TipoAsistenciaService;
  let fixture: ComponentFixture<CrearTipoasistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoasistenciaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers:[TipoAsistenciaService,HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoasistenciaComponent);
    component = fixture.componentInstance;
    tipoAsistenciaService= TestBed.inject(TipoAsistenciaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando no esta completo', () => {
    component.tipoAsistencia.controls.nombre.setValue(null);

    component.crear();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('No has llenado todos los campos');
    Swal.clickConfirm();
  });

  it('Registrar es invalida y tira mensaje de error', () => {
    
    component.tipoAsistencia.controls.nombre.setValue("JABON");

    spyOn(tipoAsistenciaService, 'crearTipoAsistencia').and.returnValue(throwError({
      
        "error": {
            "nombreExcepcion": "ExcepcionValorObligatorio",
            "mensaje": "El tipo asistencia ya existe"
        }
    
  }));

    component.crear();

    
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('El tipo asistencia ya existe');
    Swal.clickConfirm();

  });


  it('Registrar tipo asistencia es exitoso', () => {
    TestBed.resetTestingModule();
    component.tipoAsistencia.controls.nombre.setValue('JABON');

    spyOn(tipoAsistenciaService, 'crearTipoAsistencia').and.returnValue(
      of(1)
    );

    component.crear();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Se ha añadido el tipo asistencia de forma correcta');
    Swal.clickConfirm();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });


});

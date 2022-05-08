import { CommonModule, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { AsistenciaService } from '../../shared/service/asistencia.service';
import { of, throwError } from 'rxjs';

import { CrearAsistenciaComponent } from './crear-asistencia.component';
import Swal from 'sweetalert2';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearAsistenciaComponent', () => {
  let component: CrearAsistenciaComponent;
  let asistenciaService: AsistenciaService;
  let fixture: ComponentFixture<CrearAsistenciaComponent>;

  beforeEach(waitForAsync( () => {
      TestBed.configureTestingModule({
      declarations: [ CrearAsistenciaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers:[AsistenciaService,DatePipe,HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAsistenciaComponent);
    component = fixture.componentInstance;
    asistenciaService= TestBed.inject(AsistenciaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.asistencia.valid).toBeFalsy();
  });

  it('Registrar es invalida y tira mensaje de error', () => {
    
    component.asistencia.controls.idTipoAsistencia.setValue(1);
    component.asistencia.controls.idVehiculo.setValue('1');
    component.asistencia.controls.fechaInicio.setValue('2020-05-05');
    component.asistencia.controls.precio.setValue(34534);

    spyOn(asistenciaService, 'crearAsistencia').and.returnValue(throwError({
      
        "error": {
            "nombreExcepcion": "ExcepcionValorObligatorio",
            "mensaje": "Se debe ingresar el tipo de servicio"
        }
    
  }));

    component.crear();

    
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Se debe ingresar el tipo de servicio');
    Swal.clickConfirm();

  });


  it('Registrar asistencia es exitoso', () => {
    TestBed.resetTestingModule();
    component.asistencia.controls.idTipoAsistencia.setValue('1');
    component.asistencia.controls.idVehiculo.setValue('1');
    component.asistencia.controls.fechaInicio.setValue('2020-05-05');
    component.asistencia.controls.precio.setValue(34534);

    spyOn(asistenciaService, 'crearAsistencia').and.returnValue(
      of(1)
    );

    component.crear();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Se ha añadido la asistencia de forma correcta');
    Swal.clickConfirm();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  
});

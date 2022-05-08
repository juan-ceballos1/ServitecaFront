import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { AsistenciaService } from '../../shared/service/asistencia.service';
import { of } from 'rxjs';

import { CrearAsistenciaComponent } from './crear-asistencia.component';
import Swal from 'sweetalert2';

describe('CrearAsistenciaComponent', () => {
  let component: CrearAsistenciaComponent;
  let asistenciaService: AsistenciaService;
  let fixture: ComponentFixture<CrearAsistenciaComponent>;

  beforeEach(waitForAsync( () => {
      TestBed.configureTestingModule({
      declarations: [ CrearAsistenciaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
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


  it('Registrar asistencia es exitoso', () => {
    
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
  });

  
});

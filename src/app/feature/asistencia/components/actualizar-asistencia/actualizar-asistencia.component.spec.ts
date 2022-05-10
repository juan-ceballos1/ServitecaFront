import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { AsistenciaService } from '../../shared/service/asistencia.service';

import { ActualizarAsistenciaComponent } from './actualizar-asistencia.component';

describe('ActualizarAsistenciaComponent', () => {
  let component: ActualizarAsistenciaComponent;
  let asistenciaService: AsistenciaService;
  let fixture: ComponentFixture<ActualizarAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAsistenciaComponent ],
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarAsistenciaComponent);
    component = fixture.componentInstance;
    asistenciaService= TestBed.inject(AsistenciaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('actualizar no es satisfactorio', () => {
    
    const asistencia ={id:1,tipoAsistencia:{id:1,nombre:'LAVADO'},vehiculo:{id:1,matricula:'5678j',marca:'NISSAN',modelo:'CENTRA'},fechaInicio: new Date(),fechaFin: new Date(), precio:6789} ;

    component.asistenciaForm.controls.idTipoAsistencia.setValue(10);
    component.asistenciaForm.controls.idVehiculo.setValue('1');
    component.asistenciaForm.controls.fechaInicio.setValue('2020-05-05');
    component.asistenciaForm.controls.precio.setValue(34534);
    component.asistencia=asistencia;

    spyOn(asistenciaService, 'actualizarAsistencia').and.returnValue(throwError({
      
        "error": {
            "nombreExcepcion": "ExcepcionValorObligatorio",
            "mensaje": "La asistencia no existe"
        }
    
  }));

    component.actualizar();
    
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('La asistencia no existe');
    Swal.clickConfirm();

  });

  it('actualizar asistencia es exitoso', () => {
    
    TestBed.resetTestingModule();
    component.asistenciaForm.controls.idTipoAsistencia.setValue('1');
    component.asistenciaForm.controls.idVehiculo.setValue('1');
    component.asistenciaForm.controls.fechaInicio.setValue('2020-05-05');
    component.asistenciaForm.controls.precio.setValue(34534);

    spyOn(asistenciaService, 'actualizarAsistencia').and.returnValue(
      of(component.asistenciaForm.value)
    );

    component.actualizar();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Se ha actualizado la asistencia de forma correcta');
    Swal.clickConfirm();
  });

  it('actualizar asistencia no es exitoso por campos no llenados', () => {
    
    TestBed.resetTestingModule();
    component.asistenciaForm.controls.idTipoAsistencia.setValue('1');
    component.asistenciaForm.controls.idVehiculo.setValue('1');
    component.asistenciaForm.controls.fechaInicio.setValue('2020-05-05');
    component.asistenciaForm.controls.fechaFin.setValue(null);
    component.asistenciaForm.controls.precio.setValue(34534);

    component.actualizar();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('No has llenado todos los campos');
    Swal.clickConfirm();
  });
});

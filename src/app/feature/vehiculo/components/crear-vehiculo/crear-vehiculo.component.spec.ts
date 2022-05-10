 import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { VehiculoService } from '../../shared/service/vehiculo.service';

 import { CrearVehiculoComponent } from './crear-vehiculo.component';

 describe('CrearVehiculoComponent', () => {
   let component: CrearVehiculoComponent;
   let vehiculoService: VehiculoService;
   let fixture: ComponentFixture<CrearVehiculoComponent>;

   beforeEach(async () => {
     await TestBed.configureTestingModule({
       declarations: [ CrearVehiculoComponent ],
       imports: [
         CommonModule,
         HttpClientTestingModule,
         RouterTestingModule,
         ReactiveFormsModule,
         FormsModule
       ],
       providers:[VehiculoService,HttpService]
     })
     .compileComponents();
   });

   beforeEach(() => {
     fixture = TestBed.createComponent(CrearVehiculoComponent);
     component = fixture.componentInstance;
     vehiculoService= TestBed.inject(VehiculoService);
     fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });

   it('formulario es invalido cuando no esta completo', () => {
    component.vehiculo.controls.matricula.setValue(null);
    component.vehiculo.controls.marca.setValue('NISSAN');
    component.vehiculo.controls.modelo.setValue('CENTRA');
    expect(component.vehiculo.valid).toBeFalsy();

    component.crear();

    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('No se ha podido ingresar el vehiculo');
    Swal.clickConfirm();
  });

  it('Registrar vehiculo es invalida y tira mensaje de error', () => {
    
    component.vehiculo.controls.matricula.setValue("UEN 768");
    component.vehiculo.controls.marca.setValue('NISSAN');
    component.vehiculo.controls.modelo.setValue('CENTRA');

    spyOn(vehiculoService, 'crearVehiculo').and.returnValue(throwError({
      
        "error": {
            "nombreExcepcion": "ExcepcionValorObligatorio",
            "mensaje": "Ya existe un vehiculo con esa matricula"
        }
    
    }));

    component.crear();

    
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Ya existe un vehiculo con esa matricula');
    Swal.clickConfirm();

  });

  it('Registrar vehiculo es exitoso', () => {
    
    component.vehiculo.controls.matricula.setValue("UEN 768");
    component.vehiculo.controls.marca.setValue('NISSAN');
    component.vehiculo.controls.modelo.setValue('CENTRA');

    spyOn(vehiculoService, 'crearVehiculo').and.returnValue(
      of(1)
    );

    component.crear();

    
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Se ha añadido el vehiculo de forma correcta');
    Swal.clickConfirm();

  });


 });

 import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { VehiculoService } from '../../shared/service/vehiculo.service';

 import { CrearVehiculoComponent } from './crear-vehiculo.component';

 describe('CrearVehiculoComponent', () => {
   let component: CrearVehiculoComponent;
   let fixture: ComponentFixture<CrearVehiculoComponent>;

   beforeEach(async () => {
     await TestBed.configureTestingModule({
       declarations: [ CrearVehiculoComponent ],
       imports: [
         CommonModule,
         HttpClientModule,
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
     fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });

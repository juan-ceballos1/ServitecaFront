 import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { VehiculoService } from '../../shared/service/vehiculo.service';

 import { ListarVehiculoComponent } from './listar-vehiculo.component';

 describe('ListarVehiculoComponent', () => {
   let component: ListarVehiculoComponent;
   let fixture: ComponentFixture<ListarVehiculoComponent>;

   beforeEach(async () => {
     await TestBed.configureTestingModule({
       declarations: [ ListarVehiculoComponent ],
       imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [VehiculoService, HttpService]
     })
     .compileComponents();
   });

   beforeEach(() => {
     fixture = TestBed.createComponent(ListarVehiculoComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });

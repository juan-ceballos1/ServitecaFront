import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { ListarAsistenciaComponent } from './components/listar-asistencia/listar-asistencia.component';
import { CrearAsistenciaComponent } from './components/crear-asistencia/crear-asistencia.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    ListarAsistenciaComponent,
       CrearAsistenciaComponent,
       AsistenciaComponent
  ],
  imports: [
    CommonModule,
    AsistenciaRoutingModule,
    ReactiveFormsModule
  ],
  providers:[DatePipe]
})
export class AsistenciaModule { }

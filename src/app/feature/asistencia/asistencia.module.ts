import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { ListarAsistenciaComponent } from './components/listar-asistencia/listar-asistencia.component';
import { CrearAsistenciaComponent } from './components/crear-asistencia/crear-asistencia.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarAsistenciaComponent } from './components/actualizar-asistencia/actualizar-asistencia.component';


@NgModule({
  declarations: [
  
    ListarAsistenciaComponent,
       CrearAsistenciaComponent,
       AsistenciaComponent,
       ActualizarAsistenciaComponent
  ],
  imports: [
    CommonModule,
    AsistenciaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[DatePipe]
})
export class AsistenciaModule { }

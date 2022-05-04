import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { ListarAsistenciaComponent } from './components/listar-asistencia/listar-asistencia.component';
import { CrearAsistenciaComponent } from './components/crear-asistencia/crear-asistencia.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';


@NgModule({
  declarations: [
  
    ListarAsistenciaComponent,
       CrearAsistenciaComponent,
       AsistenciaComponent
  ],
  imports: [
    CommonModule,
    AsistenciaRoutingModule
  ]
})
export class AsistenciaModule { }

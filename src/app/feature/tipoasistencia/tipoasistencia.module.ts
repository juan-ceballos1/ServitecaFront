import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoasistenciaRoutingModule } from './tipoasistencia-routing.module';
import { TipoasistenciaComponent } from './components/tipoasistencia/tipoasistencia.component';
import { CrearTipoasistenciaComponent } from './components/crear-tipoasistencia/crear-tipoasistencia.component';
import { ListarTipoasistenciaComponent } from './components/listar-tipoasistencia/listar-tipoasistencia.component';


@NgModule({
  declarations: [
  
    TipoasistenciaComponent,
       CrearTipoasistenciaComponent,
       ListarTipoasistenciaComponent
  ],
  imports: [
    CommonModule,
    TipoasistenciaRoutingModule
  ]
})
export class TipoasistenciaModule { }

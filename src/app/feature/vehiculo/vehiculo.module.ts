import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { ListarVehiculoComponent } from './components/listar-vehiculo/listar-vehiculo.component';
import { CrearVehiculoComponent } from './components/crear-vehiculo/crear-vehiculo.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';


@NgModule({
  declarations: [
  
    ListarVehiculoComponent,
       CrearVehiculoComponent,
       VehiculoComponent
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule
  ]
})
export class VehiculoModule { }

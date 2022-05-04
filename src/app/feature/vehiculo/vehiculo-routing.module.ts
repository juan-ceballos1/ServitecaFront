import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearVehiculoComponent } from './components/crear-vehiculo/crear-vehiculo.component';
import { ListarVehiculoComponent } from './components/listar-vehiculo/listar-vehiculo.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';

const routes: Routes = [{
  path: '',
  component: VehiculoComponent,
  children: [
    {
      path: 'crear',
      component: CrearVehiculoComponent
    },
    {
      path: 'listar',
      component: ListarVehiculoComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculoRoutingModule { }

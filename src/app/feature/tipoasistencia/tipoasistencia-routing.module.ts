import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTipoasistenciaComponent } from './components/crear-tipoasistencia/crear-tipoasistencia.component';
import { ListarTipoasistenciaComponent } from './components/listar-tipoasistencia/listar-tipoasistencia.component';
import { TipoasistenciaComponent } from './components/tipoasistencia/tipoasistencia.component';

const routes: Routes = [{
  path: '',
  component: TipoasistenciaComponent,
  children: [
    {
      path: 'crear',
      component: CrearTipoasistenciaComponent
    },
    {
      path: 'listar',
      component: ListarTipoasistenciaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoasistenciaRoutingModule { }

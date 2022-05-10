import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarAsistenciaComponent } from './components/actualizar-asistencia/actualizar-asistencia.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { CrearAsistenciaComponent } from './components/crear-asistencia/crear-asistencia.component';
import { ListarAsistenciaComponent } from './components/listar-asistencia/listar-asistencia.component';

const routes: Routes = [{
  path: '',
  component: AsistenciaComponent,
  children: [
    {
      path: 'crear',
      component: CrearAsistenciaComponent
      
    },
    {
      path: 'listar',
      component: ListarAsistenciaComponent
    },
    {
      path: 'actualizar',
      component: ActualizarAsistenciaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciaRoutingModule { }

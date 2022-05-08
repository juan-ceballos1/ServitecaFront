import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'asistencia', loadChildren: () => import('./feature/asistencia/asistencia.module').then(m => m.AsistenciaModule) },
  { path: 'vehiculo', loadChildren: () => import('./feature/vehiculo/vehiculo.module').then(m => m.VehiculoModule) },
  { path: 'tipoasistencia', loadChildren: () => import('./feature/tipoasistencia/tipoasistencia.module').then(m => m.TipoasistenciaModule)},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'asistencia', loadChildren: () => import('./feature/asistencia/asistencia.module').then(m => m.AsistenciaModule) },
  { path: 'vehiculo', loadChildren: () => import('./feature/vehiculo/vehiculo.module').then(m => m.VehiculoModule) },
  { path: 'tipoasistencia', loadChildren: () => import('./feature/tipoasistencia/tipoasistencia.module').then(m => m.TipoasistenciaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/tipoasistencia', nombre: 'tipo de asistencia' },
    {url: '/asistencia', nombre: 'asistencia'},
    {url: '/vehiculo', nombre: 'vehiculo'}
    
  ];

  
}

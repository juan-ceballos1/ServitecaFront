import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../../shared/model/vehiculo';
import { VehiculoService } from '../../shared/service/vehiculo.service';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {

public listaVehiculos: Observable<Vehiculo[]>;

  constructor(protected vehiculoService:VehiculoService) { }

  ngOnInit(): void {
    this.listaVehiculos=this.vehiculoService.consultar();
  }

}

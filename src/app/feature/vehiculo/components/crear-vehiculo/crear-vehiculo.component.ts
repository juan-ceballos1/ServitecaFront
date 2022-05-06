import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from '../../shared/service/vehiculo.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {
  vehiculo:FormGroup;
  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit(): void {
    this.vehiculo = new FormGroup({
      matricula: new FormControl('',[Validators.required,Validators.minLength(4)]),
      marca: new FormControl('',[Validators.required]),
      modelo: new FormControl('',[Validators.required])
    });
  }

  crear(){
    this.vehiculoService.crearVehiculo(this.vehiculo.value).subscribe(
      ()=>this.vehiculo.reset(),
      _error=>console.log("Error"));
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
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
    if(this.vehiculo.valid){
      this.vehiculoService.crearVehiculo(this.vehiculo.value).subscribe(
        ()=>{
          this.vehiculo.reset()
          Swal.fire({
            icon:'success',
            title:'Se ha añadido el vehiculo de forma correcta',
            timer: 1000,
            showCancelButton: false,
            showConfirmButton: false
          })
        },
        error=>{Swal.fire({
          icon:'error',
          title:error.error.mensaje,
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false
        })}
        );
      }
      else{
        Swal.fire({
          icon:'error',
          title:"No se ha podido ingresar el vehiculo",
          timer: 1000,
          showCancelButton: false,
          showConfirmButton: false
        })
      }
  }

}

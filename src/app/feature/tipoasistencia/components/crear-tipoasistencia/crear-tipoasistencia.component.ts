import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TipoAsistenciaService } from '../../shared/service/tipo-asistencia.service';

@Component({
  selector: 'app-crear-tipoasistencia',
  templateUrl: './crear-tipoasistencia.component.html',
  styleUrls: ['./crear-tipoasistencia.component.css']
})
export class CrearTipoasistenciaComponent implements OnInit {
  tipoAsistencia:FormGroup;
  constructor(private tipoAsistenciaServicio:TipoAsistenciaService) { }

  ngOnInit(): void {
    this.tipoAsistencia = new FormGroup({
      nombre: new FormControl('',[Validators.required])
    }); 
  }

  crear(){
    if(this.tipoAsistencia.valid){
      this.tipoAsistenciaServicio.crearTipoAsistencia(this.tipoAsistencia.value).subscribe(
        ()=>{
          this.tipoAsistencia.reset()
          Swal.fire({
            icon:'success',
            title:'Se ha añadido el tipo asistencia de forma correcta'
          })
        },
        error=>{Swal.fire({
          icon:'error',
          title:error.error.mensaje
        })}
        );
      }
      else{
        Swal.fire({
          icon:'error',
          title:"No has llenado todos los campos"
        })
      }
  }

}

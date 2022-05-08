import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TipoAsistencia } from 'src/app/feature/tipoasistencia/shared/model/tipoasistencia';
import { TipoAsistenciaService } from 'src/app/feature/tipoasistencia/shared/service/tipo-asistencia.service';
import Swal from 'sweetalert2';
import { AsistenciaService } from '../../shared/service/asistencia.service';

@Component({
  selector: 'app-crear-asistencia',
  templateUrl: './crear-asistencia.component.html',
  styleUrls: ['./crear-asistencia.component.css']
})
export class CrearAsistenciaComponent implements OnInit {


  asistencia:FormGroup;
  public listaTipoAsistencias: Observable<TipoAsistencia[]>;
  constructor(protected tipoAsistenciaService:TipoAsistenciaService,private datePipe: DatePipe, protected asistenciaService:AsistenciaService) { }

  ngOnInit(): void {
    this.listaTipoAsistencias=this.tipoAsistenciaService.consultar();
    this.construirFormulario();
    
  }

  crear(){
   this.asistencia.value.fechaFin=this.datePipe.transform(this.asistencia.value.fechaFin,'yyyy-MM-ddThh:mm:ss');
   this.asistencia.value.fechaInicio=this.datePipe.transform(this.asistencia.value.fechaInicio,'yyyy-MM-ddThh:mm:ss');
   console.log(this.asistencia.value)
   this.asistenciaService.crearAsistencia(this.asistencia.value).subscribe(
    ()=>{
      this.asistencia.reset()
      Swal.fire({
        icon:'success',
        title:'Se ha añadido la asistencia de forma correcta'
      })
    },
    error=>Swal.fire({
      icon:'error',
      title:error.error.mensaje
    }));
  }

  construirFormulario(){
    this.asistencia = new FormGroup({
      idTipoAsistencia: new FormControl(Number,[Validators.required]),
      idVehiculo: new FormControl('',[Validators.required]),
      fechaInicio: new FormControl('',[Validators.required]),
      fechaFin: new FormControl(''),
      precio: new FormControl('',[Validators.required])
    });
  }

}

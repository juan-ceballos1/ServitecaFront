import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TipoAsistenciaService } from 'src/app/feature/tipoasistencia/shared/service/tipo-asistencia.service';
import Swal from 'sweetalert2';
import { DtoAsistencia } from '../../shared/model/dtoasistencia';
import { AsistenciaService } from '../../shared/service/asistencia.service';

@Component({
  selector: 'app-actualizar-asistencia',
  templateUrl: './actualizar-asistencia.component.html',
  styleUrls: ['./actualizar-asistencia.component.css']
})
export class ActualizarAsistenciaComponent implements OnInit {

  public asistencia: DtoAsistencia ={id:1,tipoAsistencia:{id:1,nombre:'LAVADO'},vehiculo:{id:1,matricula:'5678j',marca:'NISSAN',modelo:'CENTRA'},fechaInicio: new Date(),fechaFin: new Date(), precio:6789} ;
  asistenciaForm:FormGroup;
  public listaAsistencias: Observable<DtoAsistencia[]>;
  constructor(protected tipoAsistenciaService:TipoAsistenciaService, protected asistenciaService:AsistenciaService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.listaAsistencias=this.asistenciaService.consultar();
    this.construirFormulario();
  }

  actualizar(){
    this.asistenciaForm.value.fechaFin=this.datePipe.transform(this.asistenciaForm.value.fechaFin,'yyyy-MM-ddThh:mm:ss');
    this.asistenciaForm.value.fechaInicio=this.datePipe.transform(this.asistenciaForm.value.fechaInicio,'yyyy-MM-ddThh:mm:ss');
    if(this.asistenciaForm.valid){
      this.asistenciaService.actualizarAsistencia(this.asistencia.id,this.asistenciaForm.value).subscribe(
       ()=>{
         this.asistenciaForm.reset()
         Swal.fire({
           icon:'success',
           title:'Se ha actualizado la asistencia de forma correcta',
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
           title:'No has llenado todos los campos',
           timer: 2000,
           showCancelButton: false,
           showConfirmButton: false
         })
       }
  }

  construirFormulario(){
    this.asistenciaForm = new FormGroup({
      idTipoAsistencia: new FormControl(this.asistencia.tipoAsistencia.id,[Validators.required]),
      idVehiculo: new FormControl(this.asistencia.vehiculo.id,[Validators.required]),
      fechaInicio: new FormControl(this.asistencia.fechaInicio,[Validators.required]),
      fechaFin: new FormControl(this.asistencia.fechaFin,[Validators.required]),
      precio: new FormControl(this.asistencia.precio,[Validators.required])
    });
  }

}

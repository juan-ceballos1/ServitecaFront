import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.tipoAsistenciaServicio.crearTipoAsistencia(this.tipoAsistencia.value).subscribe(
      ()=>this.tipoAsistencia.reset(),
      _error=>console.log("Error"));
  }

}

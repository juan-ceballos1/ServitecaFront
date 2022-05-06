import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoAsistencia } from '../../shared/model/dtoasistencia';
import { AsistenciaService } from '../../shared/service/asistencia.service';

@Component({
  selector: 'app-listar-asistencia',
  templateUrl: './listar-asistencia.component.html',
  styleUrls: ['./listar-asistencia.component.css']
})
export class ListarAsistenciaComponent implements OnInit {

  public listaAsistencias: Observable<DtoAsistencia[]>;
  constructor(protected asistenciaService:AsistenciaService) { }

  ngOnInit(): void {
    this.listaAsistencias=this.asistenciaService.consultar()
  }

}

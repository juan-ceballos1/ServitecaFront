import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoAsistencia } from '../../shared/model/tipoasistencia';
import { TipoAsistenciaService } from '../../shared/service/tipo-asistencia.service';

@Component({
  selector: 'app-listar-tipoasistencia',
  templateUrl: './listar-tipoasistencia.component.html',
  styleUrls: ['./listar-tipoasistencia.component.css']
})
export class ListarTipoasistenciaComponent implements OnInit {

  public listaTipoAsistencias: Observable<TipoAsistencia[]>;
  constructor(protected tipoAsistenciaService:TipoAsistenciaService) { }

  ngOnInit(): void {
    this.listaTipoAsistencias=this.tipoAsistenciaService.consultar();
  }

}

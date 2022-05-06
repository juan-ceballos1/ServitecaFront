import { TipoAsistencia } from "src/app/feature/tipoasistencia/shared/model/tipoasistencia";
import { Vehiculo } from "src/app/feature/vehiculo/shared/model/vehiculo";

export interface DtoAsistencia {
    id:Number,
    tipoAsistencia:TipoAsistencia,
    vehiculo:Vehiculo,
    fechaInicio:Date,
    fechaFin:Date,
    precio:number
}
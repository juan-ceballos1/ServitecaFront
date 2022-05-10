import { by, element } from "protractor";

export class ListarTipoAsistenciaPage{
    private listarAsistencias = element.all(by.id('listaTipoAsistencias'))

    async numeroDeTipos(): Promise<number>{
        return await this.listarAsistencias.count();
    }
}
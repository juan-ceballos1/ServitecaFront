import { by, element} from "protractor";

export class ListarAsistenciaPage{
    private listarAsistencias = element.all(by.id('listaAsistencias'))

    async numeroDeCompras(): Promise<number>{
        return await this.listarAsistencias.count();
    }
}
import { by, element } from "protractor";

export class TipoAsistenciaPage{

private listar=element(by.id('listarTipoAsistencia'));
private crear=element(by.id('crearTipoAsistencia'));
private texto=element(by.id('txtHomeTipoAsistencia'))

getTexto() {
    return this.texto.getText() as Promise<string>;
  }

async clickListar(){
    await this.listar.click();
}

async clickCrear(){
    await this.crear.click();
}
}
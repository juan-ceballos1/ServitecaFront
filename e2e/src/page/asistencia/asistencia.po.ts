import { by, element } from "protractor";

export class AsistenciaPage{

private listar=element(by.id('listarasistencia'));
private crear=element(by.id('crearasistencia'));
private texto=element(by.id('txtHomeAsistencia'))

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
import { by, element } from "protractor";

export class CrearTipoAsistenciaPage{
    private nombre = element(by.id('nombre'))
    private buttonGuardar = element(by.id('guardar'));
    private swalFireTitle = element(by.className('swal2-title'));

    async ingresrNombre(nombre:string){
        await this.nombre.sendKeys(nombre);
    }

    async guardar(){
        await this.buttonGuardar.click();
      }

    async getSwalFireTitle(): Promise<string> {
        return await this.swalFireTitle.getText();
      }
}
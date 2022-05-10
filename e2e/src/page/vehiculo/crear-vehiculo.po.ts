import { by, element } from "protractor";

export class CrearVehiculoPage{
    private matricula = element(by.id('matricula'));
    private marca = element(by.id('marca'));
    private modelo = element(by.id('modelo'));
    private buttonGuardar = element(by.id('guardar'));
    private swalFireTitle = element(by.className('swal2-title'));

    async ingresarMatricula(matricula:string){
        await this.matricula.sendKeys(matricula);
    }

    async ingresarMarca(marca:string){
        await this.marca.sendKeys(marca);
    }

    async ingresarModelo(modelo:string){
        await this.modelo.sendKeys(modelo);
    }

    async guardar(){
        await this.buttonGuardar.click();
      }

    async getSwalFireTitle(): Promise<string> {
        return await this.swalFireTitle.getText();
      }
}
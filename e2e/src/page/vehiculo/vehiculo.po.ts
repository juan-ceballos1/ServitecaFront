import { by, element } from "protractor";

export class VehiculoPage{

    private listar=element(by.id('listarVehiculo'));
    private crear=element(by.id('crearVehiculo'));
    private texto=element(by.id('txtHomeVehiculo'))
    
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
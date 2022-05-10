import { by, element } from "protractor";

export class ListarVehiculoPage{
    private listaVehiculos = element.all(by.id('listaVehiculos'))

    async numeroDeVehiculos(): Promise<number>{
        return await this.listaVehiculos.count();
    }
}
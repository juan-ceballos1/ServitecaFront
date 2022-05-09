import { by, element } from "protractor";
export class CrearAsistenciaPage{
    private idTipoAsistencia = element(by.id('TipoAsistencia'));
    private idVehiculo = element(by.id('vehiculo'));
    private fechaDeInicio = element(by.id('fechaDeInicio'));
    private fechaDeFinalizacion= element(by.id('fechaDeFinalizacion'));
    private precio = element(by.id('precio'));
    private buttonGuardar = element(by.id('guardar'));

    private swalFireTitle = element(by.className('swal2-title'));

    async ingresarTipoAsistencia(value: string) {
      await this.idTipoAsistencia.sendKeys(value);
      
      }
      async ingresarIdVehiculo(id: number) {
        await this.idVehiculo.sendKeys(id);
      }
      async ingresarFechaInicio(fecha: string) {
        await this.fechaDeInicio.sendKeys(fecha);
      }

      async ingresarFechaFin(fecha: string) {
        await this.fechaDeFinalizacion.sendKeys(fecha);
      }

      async ingresarPrecio(precio: number) {
        await this.precio.sendKeys(precio);
      }
      async guardar(){
        await this.buttonGuardar.click();
      }

      async getSwalFireTitle(): Promise<string> {
        return await this.swalFireTitle.getText();
      }

      
}
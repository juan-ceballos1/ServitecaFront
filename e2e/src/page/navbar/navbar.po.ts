import { by, element } from 'protractor';

export class NavbarPage {
    linkTipoAsistencia = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/a[1]'));
    linkAsistencia = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/a[2]'));
    linkVehiculo = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/a[3]'));

    async clickBotonAsistencia() {
        await this.linkAsistencia.click();
    }

    async clickBotonTipoAsistencia() {
        await this.linkTipoAsistencia.click();
    }

    async clickBotonVehiculo() {
        await this.linkVehiculo.click();
    }
}

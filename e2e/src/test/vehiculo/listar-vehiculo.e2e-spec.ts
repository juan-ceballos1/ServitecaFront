import { ListarVehiculoPage } from "../../page/vehiculo/listar-vehiculo.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { VehiculoPage } from "../../page/vehiculo/vehiculo.po";

describe('workspace-project serviteca tipo asistencia', () => {
    let navBar: NavbarPage;
    let listarVehiculoPage: ListarVehiculoPage;
    let vehiculoPage: VehiculoPage;

    beforeEach(() => {
        navBar = new NavbarPage();
        vehiculoPage= new VehiculoPage();
        listarVehiculoPage = new ListarVehiculoPage();
        navBar.clickBotonVehiculo();
    });

    it('Debería listar los vehiculos', () => {
        vehiculoPage.clickListar();
        expect(listarVehiculoPage.numeroDeVehiculos()).toBeGreaterThan(1);
    });


});
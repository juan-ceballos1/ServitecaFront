import { CrearVehiculoPage } from "../../page/vehiculo/crear-vehiculo.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { VehiculoPage } from "../../page/vehiculo/vehiculo.po";
import { browser } from "protractor";

describe('workspace-project serviteca vehiculo crear', () => {
    let navBar: NavbarPage;
    let crearVehiculoPage: CrearVehiculoPage;
    let vehiculoPage: VehiculoPage;

    beforeEach(() => {
        navBar = new NavbarPage();
        vehiculoPage= new VehiculoPage();
        crearVehiculoPage = new CrearVehiculoPage();
        navBar.clickBotonVehiculo();
        vehiculoPage.clickCrear();
    });

    it('Deberia crear vehiculo', () => {
        const MATRICULA="REPA 3423"
        const MARCA="NISSAN"
        const MODELO="CENTRA"

        browser.driver.manage().window().maximize();

      
        crearVehiculoPage.ingresarMatricula(MATRICULA);
        crearVehiculoPage.ingresarMarca(MARCA);
        crearVehiculoPage.ingresarModelo(MODELO);
        crearVehiculoPage.guardar();

        
        expect(crearVehiculoPage.getSwalFireTitle()).toEqual('Se ha añadido el vehiculo de forma correcta');
        
    });

    it('No debería crear un vehiculo por campos no ingresados', () => {
        crearVehiculoPage.guardar();
        expect(crearVehiculoPage.getSwalFireTitle()).toEqual('No se ha podido ingresar el vehiculo');
    });

    it('No debería crear un vehiculo cuando la matricula tiene menos de 4 digitos', () => {
        const MATRICULA="RE"
        const MARCA="NISSAN"
        const MODELO="CENTRA"

        browser.driver.manage().window().maximize();

      
        crearVehiculoPage.ingresarMatricula(MATRICULA);
        crearVehiculoPage.ingresarMarca(MARCA);
        crearVehiculoPage.ingresarModelo(MODELO);
        crearVehiculoPage.guardar();

        
        expect(crearVehiculoPage.getSwalFireTitle()).toEqual('No se ha podido ingresar el vehiculo');
    });

});
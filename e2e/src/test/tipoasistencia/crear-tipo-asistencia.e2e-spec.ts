import { CrearTipoAsistenciaPage } from "../../page/tipoasistencia/crear-tipo-asisencia.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { TipoAsistenciaPage } from "../../page/tipoasistencia/tipo-asistencia.po";
import { browser } from "protractor";

describe('workspace-project serviteca tipo asistencia crear', () => {
    let navBar: NavbarPage;
    let crearTipoAsistenciaPage: CrearTipoAsistenciaPage;
    let tipoAsistenciaPage: TipoAsistenciaPage;

    beforeEach(() => {
        navBar = new NavbarPage();
        tipoAsistenciaPage= new TipoAsistenciaPage();
        crearTipoAsistenciaPage = new CrearTipoAsistenciaPage();
        navBar.clickBotonTipoAsistencia();
        tipoAsistenciaPage.clickCrear();
    });

    it('Deberia crear tipo asistencia', () => {
        const NOMBRE="REPA"

        browser.driver.manage().window().maximize();

      
        crearTipoAsistenciaPage.ingresrNombre(NOMBRE);
        crearTipoAsistenciaPage.guardar();

        
        expect(crearTipoAsistenciaPage.getSwalFireTitle()).toEqual('Se ha añadido el tipo asistencia de forma correcta');
        
    });

    it('No debería crear un tipo asistencia por campos no ingresados', () => {
        crearTipoAsistenciaPage.guardar();
        expect(crearTipoAsistenciaPage.getSwalFireTitle()).toEqual('No has llenado todos los campos');
    });

});
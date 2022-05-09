import { browser} from "protractor";
import { AsistenciaPage } from "../../page/asistencia/asistencia.po";
import { CrearAsistenciaPage } from "../../page/asistencia/crear.asistencia.po";
import { NavbarPage } from "../../page/navbar/navbar.po";

describe('workspace-project serviteca', () => {
    let navBar: NavbarPage;
    let crearAsistenciaPage: CrearAsistenciaPage;
    let asistenciaPage: AsistenciaPage;

    beforeEach(() => {
        navBar = new NavbarPage();
        asistenciaPage= new AsistenciaPage();
        crearAsistenciaPage = new CrearAsistenciaPage();
        navBar.clickBotonAsistencia();
        asistenciaPage.clickCrear();
    });

    it('Deberia crear asistencia', () => {
        const ID_TIPO_ASISTENCIA = "REPA";
        const ID_VEHICULO = 1;
        const FECHA_INICIO= "07/17/2020";
        const FECHA_FIN= "07/17/2020";
        const PRECIO= 1234;

        browser.driver.manage().window().maximize();
        crearAsistenciaPage.ingresarTipoAsistencia(ID_TIPO_ASISTENCIA)
        crearAsistenciaPage.ingresarIdVehiculo(ID_VEHICULO);
        crearAsistenciaPage.ingresarFechaInicio(FECHA_INICIO)
        crearAsistenciaPage.ingresarFechaFin(FECHA_FIN)
        crearAsistenciaPage.ingresarPrecio(PRECIO)

      
        crearAsistenciaPage.guardar();

        
        expect(crearAsistenciaPage.getSwalFireTitle()).toEqual('Se ha añadido la asistencia de forma correcta');
        
    });

    it('No debería crear una compra por campos inválidos', () => {
        crearAsistenciaPage.guardar();
        expect(crearAsistenciaPage.getSwalFireTitle()).toEqual('No has llenado todos los campos');
    });

});
import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarTipoAsistenciaPage } from "../../page/tipoasistencia/listar-tipo-asistencia.po";
import { TipoAsistenciaPage } from "../../page/tipoasistencia/tipo-asistencia.po";

describe('workspace-project serviteca tipo asistencia', () => {
    let navBar: NavbarPage;
    let listarTipoAsistenciaPage: ListarTipoAsistenciaPage;
    let tipoAsistenciaPage: TipoAsistenciaPage;

    beforeEach(() => {
        navBar = new NavbarPage();
        tipoAsistenciaPage= new TipoAsistenciaPage();
        listarTipoAsistenciaPage = new ListarTipoAsistenciaPage();
        navBar.clickBotonTipoAsistencia();
    });

    it('Debería listar los tipo asistencias', () => {
        tipoAsistenciaPage.clickListar();
        expect(listarTipoAsistenciaPage.numeroDeTipos()).toBeGreaterThan(1);
    });


});
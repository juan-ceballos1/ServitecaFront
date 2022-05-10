import { AsistenciaPage } from "../../page/asistencia/asistencia.po";
import { ListarAsistenciaPage } from "../../page/asistencia/listar-asistencia.po";
import { NavbarPage } from "../../page/navbar/navbar.po";

describe('workspace-project serviteca', () => {
    let navBar: NavbarPage;
    let listarAsistenciaPage: ListarAsistenciaPage;
    let asistenciaPage: AsistenciaPage;

    beforeEach(() => {
        navBar = new NavbarPage();
        asistenciaPage= new AsistenciaPage();
        listarAsistenciaPage = new ListarAsistenciaPage();
        navBar.clickBotonAsistencia();
    });

    it('Debería listar las asistencias', () => {
        asistenciaPage.clickListar();
        expect(listarAsistenciaPage.numeroDeAsistencias()).toBeGreaterThan(1);
    });


});
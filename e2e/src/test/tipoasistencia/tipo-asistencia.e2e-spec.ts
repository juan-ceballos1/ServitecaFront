import { browser } from "protractor";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { TipoAsistenciaPage } from "../../page/tipoasistencia/tipo-asistencia.po";

describe('workspece-asistencia',()=>{
    let tipoAsistencia:TipoAsistenciaPage;
    let navbar:NavbarPage;
    
    beforeEach(()=>{
        tipoAsistencia= new TipoAsistenciaPage();
        navbar= new NavbarPage();
        navbar.clickBotonTipoAsistencia();
    });
    
    it('Deberia cargar el texto',()=>{
        tipoAsistencia.getTexto()
        expect(tipoAsistencia.getTexto()).toBe("En este lugar podras ver y registrar los tipos de asistencias de la serviteca")
        expect(browser.getCurrentUrl()).toContain('tipoasistencia')
    });
    
    
    it('Deberia redirigir a listar',()=>{
        tipoAsistencia.clickListar();
        expect(browser.getCurrentUrl()).toContain('tipoasistencia/listar')
    });
    
    it('Deberia redirigir a crear',()=>{
        tipoAsistencia.clickCrear();
        expect(browser.getCurrentUrl()).toContain('tipoasistencia/crear')
    });
    
    
    })
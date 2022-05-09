import { AsistenciaPage } from "../../page/asistencia/asistencia.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";

describe('workspece-asistencia',()=>{
let asistencia:AsistenciaPage;
let navbar:NavbarPage;

beforeEach(()=>{
    asistencia= new AsistenciaPage();
    navbar= new NavbarPage();
    navbar.clickBotonAsistencia();
});

it('Deberia cargar el texto',()=>{
    asistencia.getTexto()
    expect(asistencia.getTexto()).toBe("En este lugar podras ver y registrar las asistencias de la serviteca")
    expect(browser.getCurrentUrl()).toContain('asistencia')
});


it('Deberia redirigir a listar',()=>{
    asistencia.clickListar();
    expect(browser.getCurrentUrl()).toContain('asistencia/listar')
});

it('Deberia redirigir a crear',()=>{
    asistencia.clickCrear();
    expect(browser.getCurrentUrl()).toContain('asistencia/crear')
});







})
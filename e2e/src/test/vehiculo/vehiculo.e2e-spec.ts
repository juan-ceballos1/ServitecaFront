import { NavbarPage } from "../../page/navbar/navbar.po";
import { VehiculoPage } from "../../page/vehiculo/vehiculo.po";
import { browser } from "protractor";

describe('workspece-asistencia',()=>{
    let vehiculo:VehiculoPage;
    let navbar:NavbarPage;
    
    beforeEach(()=>{
        vehiculo= new VehiculoPage();
        navbar= new NavbarPage();
        navbar.clickBotonVehiculo();
    });
    
    it('Deberia cargar el texto',()=>{
        vehiculo.getTexto()
        expect(vehiculo.getTexto()).toBe("En este lugar podras ver y registrar los vehiculos")
        expect(browser.getCurrentUrl()).toContain('vehiculo')
    });
    
    
    it('Deberia redirigir a listar',()=>{
        vehiculo.clickListar();
        expect(browser.getCurrentUrl()).toContain('vehiculo/listar')
    });
    
    it('Deberia redirigir a crear',()=>{
        vehiculo.clickCrear();
        expect(browser.getCurrentUrl()).toContain('vehiculo/crear')
    });
    
    
    })
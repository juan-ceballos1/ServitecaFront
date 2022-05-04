import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoasistenciaComponent } from './crear-tipoasistencia.component';

describe('CrearTipoasistenciaComponent', () => {
  let component: CrearTipoasistenciaComponent;
  let fixture: ComponentFixture<CrearTipoasistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoasistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

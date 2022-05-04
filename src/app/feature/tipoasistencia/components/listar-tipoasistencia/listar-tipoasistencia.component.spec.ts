import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoasistenciaComponent } from './listar-tipoasistencia.component';

describe('ListarTipoasistenciaComponent', () => {
  let component: ListarTipoasistenciaComponent;
  let fixture: ComponentFixture<ListarTipoasistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoasistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

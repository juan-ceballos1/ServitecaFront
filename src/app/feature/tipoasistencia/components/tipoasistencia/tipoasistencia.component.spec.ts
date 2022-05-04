import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoasistenciaComponent } from './tipoasistencia.component';

describe('TipoasistenciaComponent', () => {
  let component: TipoasistenciaComponent;
  let fixture: ComponentFixture<TipoasistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoasistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

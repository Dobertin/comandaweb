import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteComandaComponent } from './reporte-comanda.component';

describe('ReporteComandaComponent', () => {
  let component: ReporteComandaComponent;
  let fixture: ComponentFixture<ReporteComandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteComandaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

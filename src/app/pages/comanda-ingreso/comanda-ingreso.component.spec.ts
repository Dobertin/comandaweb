import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaIngresoComponent } from './comanda-ingreso.component';

describe('ComandaIngresoComponent', () => {
  let component: ComandaIngresoComponent;
  let fixture: ComponentFixture<ComandaIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandaIngresoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandaIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

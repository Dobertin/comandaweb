import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMesaComponent } from './registro-mesa.component';

describe('RegistroMesaComponent', () => {
  let component: RegistroMesaComponent;
  let fixture: ComponentFixture<RegistroMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroMesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

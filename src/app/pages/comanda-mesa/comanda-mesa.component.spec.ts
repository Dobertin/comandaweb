import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaMesaComponent } from './comanda-mesa.component';

describe('ComandaMesaComponent', () => {
  let component: ComandaMesaComponent;
  let fixture: ComponentFixture<ComandaMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandaMesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

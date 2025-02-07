import { Component } from '@angular/core';

@Component({
  selector: 'app-comanda-mesa',
  imports: [],
  templateUrl: './comanda-mesa.component.html',
  styleUrl: './comanda-mesa.component.css'
})
export class ComandaMesaComponent {
  mesas = [
    { id: 0, nombre: 'MOSTRADOR' },
    { id: 1, nombre: 'MESA 1' },
    { id: 2, nombre: 'MESA 2' },
    { id: 3, nombre: 'MESA 3' },
    { id: 4, nombre: 'MESA 4' },
    { id: 5, nombre: 'MESA 5' },
    { id: 6, nombre: 'MESA 6' },
    { id: 7, nombre: 'MESA 7' }
  ];

  seleccionarMesa(mesa: any) {
    console.log(`Seleccionaste ${mesa.nombre}`);
  }
}

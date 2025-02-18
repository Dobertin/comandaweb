import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-comanda-mesa',
  standalone: true, // 👈 Asegurar que es standalone
  imports: [CommonModule,RouterLink, RouterOutlet], // 👈 Importar CommonModule para usar *ngFor
  templateUrl: './comanda-mesa.component.html',
  styleUrls: ['./comanda-mesa.component.css']
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
id: any;

  seleccionarMesa(mesa: any) {
    console.log(`Seleccionaste ${mesa.nombre}`);
    
  }
}

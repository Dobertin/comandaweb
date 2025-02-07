import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // 👈 Asegura que AppComponent es standalone
  imports: [LayoutComponent, RouterOutlet], // 👈 Agrega LayoutComponent aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comandaweb';
}

import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true, // Asegurar que es standalone
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  currentDate: string = '';

  ngOnInit() {
    this.currentDate = this.formatDate();
  }

  formatDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

}
import { isPlatformBrowser } from '@angular/common';
import { Component,Inject,OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy  {

  currentDate: string = '';
  sessionTimeLeft: string = 'Calculando...';
  private intervalId: any;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object,private authService: AuthService) {}

  ngOnInit() {
    this.currentDate = this.formatDate();
    // Verifica si estamos en el navegador antes de acceder a localStorage
    if (isPlatformBrowser(this.platformId)) {
      this.startSessionTimer();
    }
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  formatDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

  logout() {
    this.authService.logout();   
    
  }

  startSessionTimer() {
    if (!isPlatformBrowser(this.platformId)) return; // Evita errores en SSR

    const tokenExpiration = localStorage.getItem('token_expiration');

    if (!tokenExpiration) {
      this.router.navigate(['/login']);
      return;
    }

    this.updateSessionTime();

    this.intervalId = setInterval(() => {
      this.updateSessionTime();
    }, 1000);
  }

  updateSessionTime() {
    if (!isPlatformBrowser(this.platformId)) return; // Evita errores en SSR

    const tokenExpiration = localStorage.getItem('token_expiration');

    if (!tokenExpiration) {
      this.sessionTimeLeft = 'Sesión expirada';
      this.router.navigate(['/login']);
      return;
    }

    const expirationTime = parseInt(tokenExpiration, 10);
    const currentTime = new Date().getTime();
    const timeLeft = expirationTime - currentTime;

    if (timeLeft <= 0) {
      this.sessionTimeLeft = 'Sesión expirada';
      localStorage.removeItem('token');
      localStorage.removeItem('token_expiration');
      this.router.navigate(['/login']);
      return;
    }

    // Mostrar tiempo en formato HH:MM:SS
    const hours = Math.floor(timeLeft / (60 * 60 * 1000));
    const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    this.sessionTimeLeft = `${hours}h ${minutes}m ${seconds}s`;
  }
}
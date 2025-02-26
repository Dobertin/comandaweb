import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    // Verificamos si estamos en el navegador antes de acceder a localStorage
    if (isPlatformBrowser(this.platformId) && localStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
  }

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response.exito) {
          const expirationTime = new Date().getTime() + 8 * 60 * 60 * 1000; // 8 horas
          localStorage.setItem('token', response.mensaje);
          localStorage.setItem('token_expiration', expirationTime.toString());
          window.location.href = '/home'; // Redirigir manualmente para evitar problemas con estado de sesión
        } else {
          this.errorMessage = response.mensaje; // Mostrar mensaje de error
        }
      },
      error => {
        this.errorMessage = 'Error en el servidor, intenta de nuevo.';
      }
    );
  }
}

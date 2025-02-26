import { Injectable, inject, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private tokenKey = 'token';

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  login(username: string, password: string) {
    return this.http.post<{ exito: boolean; mensaje: string }>(`${this.apiUrl}/login`, { username, password });
  }

  // login(username: string, password: string) {
  //   return this.http.post<{ exito: boolean; mensaje: string }>(`${this.apiUrl}/login`, { username, password })
  //     .subscribe(response => {
  //       if (response.exito && isPlatformBrowser(this.platformId)) {
  //         const expirationTime = new Date().getTime() + 8 * 60 * 60 * 1000; // 1 hora desde ahora
  //         localStorage.setItem(this.tokenKey, response.mensaje); // 📌 Guardamos el token del campo "mensaje"          
  //         localStorage.setItem('token_expiration', expirationTime.toString());
  //         this.router.navigate(['/home']);
  //       }
  //     });
  // }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem('token_expiration');
    }
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(this.tokenKey);
      if (!token) return false;

      // Verificar si el token ha expirado
      return !this.isTokenExpired(token);
    }
    return false;
  }
  private isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decodificar el payload del token
      const expiry = payload.exp; // Extraer tiempo de expiración
      const now = Math.floor(Date.now() / 1000); // Obtener tiempo actual en segundos

      return now >= expiry; // Retorna true si el token ya ha expirado
    } catch (e) {
      return true; // Si hay error, asumimos que el token es inválido o expirado
    }
  }
}

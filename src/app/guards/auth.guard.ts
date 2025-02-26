import { Injectable, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from 'app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private router = new Router();
  private authService: AuthService;
  private platformId: object;

  constructor(@Inject(PLATFORM_ID) platformId: object, authService: AuthService, router: Router) {
    this.platformId = platformId;
    this.authService = authService;
    this.router = router;
  }

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['/login']);
        return false;
      }
    }
    return true;
  }
}

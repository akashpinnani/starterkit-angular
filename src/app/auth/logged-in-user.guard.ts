import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { CredentialsService } from './credentials.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInUserGuard implements CanActivate {
  constructor(private credentialService: CredentialsService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.credentialService.isAuthenticated()) {
      return true;
    }
    this.router.navigate([route.queryParams.redirect || '/'], { replaceUrl: true });
    return false;
  }
}

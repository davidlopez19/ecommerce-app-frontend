import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  constructor(private router: Router, private messageService:MessageService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      localStorage.getItem('token') == null ||
      localStorage.getItem('token') == ''
    ) {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Debe iniciar sesion' });
      this.router.navigate(['/authentication']);
      return false;
    } else {
      return true;
    }
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(AuthorizeService).canActivate(next, state);
};

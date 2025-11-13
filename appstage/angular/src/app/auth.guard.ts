
import { AuthService } from './services/auth.service';

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLogged = authService.isLoggedIn();
  console.log("AuthGuard - User Logged In:", isLogged); // Debugging

  if (!isLogged) {
    router.navigate(['/loge-in']);
    return false;
  }
  return true;
};


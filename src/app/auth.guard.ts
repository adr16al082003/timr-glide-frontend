import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './services/login.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(LoginService);
   
  
   let authenticated: boolean = JSON.parse(sessionStorage.getItem('authenticated') as string)

   //* si estamos loguados tanto en el proceso del algoritmo como en el session storage retornar true
   if (authService.isLoggedIn() || authenticated) {
     return true;
   }


  return router.parseUrl('login');
};

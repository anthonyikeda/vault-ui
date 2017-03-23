import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {


  constructor(private router: Router, private authService: AuthService){

  };

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isLoggedIn.map((auth) => {
      if(auth) {
        return true;
      }
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }).first();
  }
}

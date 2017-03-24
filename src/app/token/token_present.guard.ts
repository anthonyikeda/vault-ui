import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';

@Injectable()
export class TokenPresentGuard implements CanActivate {


  constructor(private router: Router, private tokenService: TokenService) {


  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.tokenService.isTokenPresent.map((auth) => {
      if(auth) {
        return true;
      }

      this.router.navigate(['/token'], { queryParams: { returnUrl: state.url} });
      return false;
    }).first();

    return false;
  }


}

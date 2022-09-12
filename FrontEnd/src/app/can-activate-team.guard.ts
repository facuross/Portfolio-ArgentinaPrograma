import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './services/token.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateTeamGuard implements CanActivate {

  constructor (private router: Router, private tokenService: TokenService) {}

  redirect(flag: string): any { 
    if(flag === null) {
      this.router.navigate(['']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.tokenService.getToken();
      this.redirect(token)
      if(token != null){
        return true;
      } else {
        return false;
      }
    }
}

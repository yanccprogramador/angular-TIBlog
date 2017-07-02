/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor() { }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}

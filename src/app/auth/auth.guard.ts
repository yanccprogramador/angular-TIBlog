/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from "app/services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService:UserService) { }

  canActivate() {
      if (localStorage.getItem('currentUser')) {
  return this.userService.getById(localStorage.getItem('currentUser')).then((art)=>{
    if (localStorage.getItem('currentUser')) {

        if(art.rows[0].senha=localStorage.getItem('userSenha')){
           return true;
        }else{
          localStorage.remove('currentUser');
          localStorage.remove('userSenha');
          return false;
        }
      }else{
        return false;
      }
    });
    }else{
      return false;
    }
    }



}

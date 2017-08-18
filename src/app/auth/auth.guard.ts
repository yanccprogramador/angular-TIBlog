/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import "rxjs/add/operator/toPromise";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from "app/services/user.service";
import { RequestOptions,Http,Headers, Response } from "@angular/http";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService:UserService,private http:Http,private router:Router) { }

  canActivate() {
   
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://yc-ti-blog.herokuapp.com/usuario/logar',{login:localStorage.getItem('currentUser'),senha:localStorage.getItem('userSenha')},options)
      .toPromise().then((response: Response) => {
        let body=response.json();
        let user=body;
        if(user.success){
           return true;
        }else{
            return false;
        }
        // login successful if there's a jwt token in the response
      });
   
    }



}

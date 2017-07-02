/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import "rxjs/add/operator/map";
import {sha1} from "js-sha1";



@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.get('http://yc-ti-blog.herokuapp.com/usuario/'+username)
      .map((response: Response) => {
        let body=response.json();
        if(body.rows.senha==sha1(password)){
           localStorage.setItem('currentUser', JSON.stringify(body.rows));
        }
        // login successful if there's a jwt token in the response
        return;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}

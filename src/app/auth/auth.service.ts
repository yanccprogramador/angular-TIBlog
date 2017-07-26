/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import "rxjs/add/operator/toPromise";
import * as sha1 from 'js-sha1';
import{MzToastService} from "ng2-materialize/dist"



@Injectable()
export class AuthenticationService {
  constructor(private http: Http,private toastService: MzToastService) { }

  login(username: string, password: string) {
    return this.http.get('http://yc-ti-blog.herokuapp.com/usuario/'+username)
      .toPromise().then((response: Response) => {
        let body=response.json();
        let user=body.rows[0];
        if(user.senha==sha1(password)){
          this.toastService.show('Logado!', 4000, 'green');
           localStorage.setItem('currentUser',user.login);
        }
        // login successful if there's a jwt token in the response
        return true;
      }).catch((response: Response)=>
       this.toastService.show('Tente novamente usuario invalido!', 4000, 'green')
     );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}

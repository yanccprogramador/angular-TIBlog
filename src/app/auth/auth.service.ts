/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import "rxjs/add/operator/toPromise";
import{MzToastService} from "ng2-materialize/dist"



@Injectable()
export class AuthenticationService {
  constructor(private http: Http,private toastService: MzToastService) { }

  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://yc-ti-blog.herokuapp.com/usuario/logar',{login:username,senha:password},options)
      .toPromise().then((response: Response) => {
        let body=response.json();
        let user=body;
        if(user.success){
          this.toastService.show('Logado!', 4000, 'green');
           localStorage.setItem('currentUser',username);
           localStorage.setItem('userSenha',password);
           return true;
        }else{
            this.toastService.show('Tente novamente usuario invalido!', 4000, 'red');
            return false;
        }
        // login successful if there's a jwt token in the response
      }).catch((response: Response)=>
       this.toastService.show('Tente novamente , não conseguimos conectar!', 4000, 'red')
     );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userSenha');
  }
}

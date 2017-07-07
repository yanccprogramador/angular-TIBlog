/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Injectable()
export class UserService {
  protected usersUrl: string= "http://yc-ti-blog.herokuapp.com/usuario/";
  get usersURL(): string {
    return this.usersURL;
  }

  set usersURL(value: string) {
    this.usersURL = value;
  }
  constructor(private http:Http){}
  getAll():any{
    return this.http.get(this.usersUrl).toPromise().then((response: Response) =>{return response.json();});
  }

  getById(id: string):any {
    return this.http.get(this.usersUrl + id).toPromise().then((response: Response) =>{return response.json();});
  }

  create(user: JSON):any {
    return this.http.post(this.usersUrl, user).toPromise().then((response: Response) =>{return response.json();});
  }

  update(user: JSON,login: string):any {
    return this.http.put(this.usersUrl + login, user).toPromise().then((response: Response) =>{return response.json();});
  }

  delete(id: string):any {
    return this.http.delete(this.usersUrl + id).toPromise().then((response: Response) => {return response.json();});
  }

  // private helper methods

}

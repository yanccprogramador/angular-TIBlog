/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

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
    return this.http.get(this.usersUrl).map((response: Response) => response.json());
  }

  getById(id: string):any {
    return this.http.get(this.usersUrl + id).map((response: Response) => response.json());
  }

  create(user: JSON):any {
    return this.http.post(this.usersUrl, user).map((response: Response) => response.json());
  }

  update(user: JSON,login: string):any {
    return this.http.put(this.usersUrl + login, user).map((response: Response) => response.json());
  }

  delete(id: string):any {
    return this.http.delete(this.usersUrl + id).map((response: Response) => response.json());
  }

  // private helper methods

}

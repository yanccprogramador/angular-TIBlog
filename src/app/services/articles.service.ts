/**
 * Created by yan on 02/07/17.
 */
/**
 * Created by yan on 02/07/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Injectable()
export class ArticleService {

  private _url:string = "http://yc-ti-blog.herokuapp.com/";
  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
  constructor(private http:Http){}
  getAll():any {
    return this.http.get(this._url).toPromise().then((response: Response) => return response.json());
  }

  getById(id: number):any {
    return this.http.get(this._url + id).toPromise().then((response: Response) => return  response.json());
  }

  create(article: JSON):any {
    return this.http.post(this._url, article).toPromise().then((response: Response) => return  response.json());
  }

  update(article : JSON,id : number) {
    return this.http.put(this._url+id, article).toPromise().then((response: Response) => return  response.json());
  }

  delete(id: number):any {
    return this.http.delete(this._url + id).toPromise().then((response: Response) => return  response.json());
  }

  // private helper methods

}

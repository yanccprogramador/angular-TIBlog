import { Component } from '@angular/core';
import {AuthGuard} from './auth/auth.guard';
import {AuthenticationService} from "./auth/auth.service";

import { Http, Headers, Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  loginView: boolean=true;
  articlesView:boolean=false;
  private login:string;
  private password:string;
  articles:any;
  constructor(private auth:AuthGuard,private authe:AuthenticationService ){}
   verify():any{
    this.loginView=this.auth.canActivate();
     if ( this.loginView == true) {
       this.articlesView = true;
     }

   }
   logar():any{


      window.alert(this.authe.login(this.login,this.password));
      this.authe.login(this.login,this.password)
      this.articlesView=true;
   }

}

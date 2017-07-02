import { Component } from '@angular/core';
import {AuthGuard} from './auth/auth.guard';
import {AuthenticationService} from "./auth/auth.service";
import {ArticleService} from "app/services/articles.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public loginView: boolean=true;
  public auth:AuthGuard;
  public articlesView:boolean=false;
  public authe:AuthenticationService ;
  public login:string;
  public password:string;
  public articles:any;
  constructor(){}
   verify():any{
     this.loginView=this.auth.canActivate();
     if ( this.loginView == true) {
       this.articlesView = true;
     }
   }
   logar():any{

      window.alert(this.authe.login(this.login,this.password));
      this.authe.login(this.login,this.password)
      this.listar();
   }
   listar():any{
     let articleService:ArticleService;
     this.articles=articleService.getAll();
   }
}

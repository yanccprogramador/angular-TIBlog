import { Component, OnInit } from '@angular/core';
import {Article} from '../articles';
import {AuthGuard} from '../auth/auth.guard';
import {AuthenticationService} from "../auth/auth.service";
import {ArticleService} from "app/services/articles.service";

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {
  articles;
  articleUnique;
  logado: boolean=true;
  private login:string;
  private password:string;
  constructor(private articleService: ArticleService,private auth:AuthGuard,private authe:AuthenticationService) { }
  ngOnInit(){

    this.logado=this.auth.canActivate();
     if ( this.logado == true) {
       let user=localStorage.getItem('currentUser');
       this.articleService.getMine(user).then((art)=>this.articles=art);
     }

    }
    logar():any{
      this.authe.login(this.login,this.password);
      this.logado=true;
    }

  del(id:number){
    let user=localStorage.getItem('currentUser');
    this.articleService.delete(id).then((art)=>this.articleService.getMine(user).then((art)=>this.articles=art));

  }
}

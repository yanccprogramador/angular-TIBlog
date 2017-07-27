import { Component, OnInit } from '@angular/core';
import {Article} from '../articles';
import {AuthGuard} from '../auth/auth.guard';
import {AuthenticationService} from "../auth/auth.service";
import {ArticleService} from "app/services/articles.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article;

  logado: boolean=true;
  id:number;
  private login:string;
  private password:string;
  constructor(private articleService: ArticleService,private auth:AuthGuard,private authe:AuthenticationService,private params:ActivatedRoute) {
     this.id=params.snapshot.params['id'];
   }

  ngOnInit() {
    this.logado=this.auth.canActivate();
     if ( this.logado == true) {
       this.articleService.getById(this.id).then((art)=>this.article=art);
       this.article[0].artigo=this.article[0].artigo.replace("\n/g","<br/>");
     }
  }



    logar():any{
      this.authe.login(this.login,this.password).then((log:boolean)=> this.logado=log);
    }



}

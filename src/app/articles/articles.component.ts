import { Component, OnInit } from '@angular/core';
import {Article} from '../articles';
import {AuthGuard} from '../auth/auth.guard';
import {AuthenticationService} from "../auth/auth.service";
import {ArticleService} from "app/services/articles.service";
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles;
  articleUnique;
  mostrar=false;
  logado: boolean = true;
  private login: string;
  private password: string;
  pesquisa="";
  constructor(private articleService: ArticleService, private auth: AuthGuard, private authe: AuthenticationService) { }
  ngOnInit() {
    if(this.auth.canActivate()!=false){
    this.auth.canActivate().then((sessao) => {
      this.logado = sessao;
      if (this.logado == true) {
        this.articleService.getAll().then((art) => this.articles = art);
      }
    });
  }else{
    this.logado = false;
  }
  }
  mostrando(){
    this.mostrar=!this.mostrar;
  }
  pesquisando(){
    if(this.pesquisa!="" ){
        this.articleService.search(this.pesquisa).then((art) => this.articles = art);
    }else{
      this.articleService.getAll().then((art) => this.articles = art);
    }
  }
  logar(): any {
    this.authe.login(this.login, this.password).then((log: boolean) => {
      this.logado = log
      this.articleService.getAll().then((art) => this.articles = art);
    });
  }

  abrir(id: number) {
    this.articleService.getById(id).then((art) => this.articleUnique = art);

  }

}

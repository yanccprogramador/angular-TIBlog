import { Component, OnInit } from '@angular/core';
import {Article} from '../articles';
import {AuthGuard} from '../auth/auth.guard';
import {AuthenticationService} from "../auth/auth.service";
import {ArticleService} from "app/services/articles.service";
import { MzToastService } from "ng2-materialize/dist";
@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {
  articles;
  articleUnique;
  artigo = { titulo: "", dono: "", artigo: "", id: 0 };
  logado: boolean = true;
  private login: string;
  private password: string;
  editModal;
  constructor(private articleService: ArticleService, private auth: AuthGuard, private authe: AuthenticationService, private toastService: MzToastService) { }

  ngOnInit() {
    if (this.auth.canActivate() != false) {
      this.auth.canActivate().then((sessao) => {
        this.logado = sessao;
        if (this.logado == true) {
          let user = localStorage.getItem('currentUser');
          this.articleService.getMine(user).then((art) => this.articles = art);

        }
      });
    } else {
      this.logado = false;
    }
  }
  logar(): any {
    this.authe.login(this.login, this.password);
    this.logado = true;
  }
  atualizar(id: number) {

    this.articleService.getById(id).then((art) => this.artigo = art[0]);
  }
  update(id) {
    this.articleService.update(this.artigo, id).then((art) => {
      if (art.success) {
        this.toastService.show('Atualizado!', 4000, 'green');
      } else {
        this.toastService.show('Tente novamente!', 4000, 'red');
      }
    });
  }
  del(id: number) {
    let user = localStorage.getItem('currentUser');
    this.articleService.delete(id).then((art) => {
      if (art.success) {
        this.articleService.getMine(user).then((art) => this.articles = art);
        this.toastService.show('Apagado!', 4000, 'green');
      } else {
        this.toastService.show('Tente novamente!', 4000, 'red');
      }
    });
  }
}

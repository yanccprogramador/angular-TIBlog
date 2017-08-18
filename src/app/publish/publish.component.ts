import { Component, OnInit } from '@angular/core';
import {Article} from '../articles';
import {AuthGuard} from '../auth/auth.guard';
import {AuthenticationService} from "../auth/auth.service";
import {ArticleService} from "app/services/articles.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MzToastService } from "ng2-materialize/dist";


@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  logado: boolean = false;
  enviando=false;
  article = new Article();
  private login: string = '';
  private password: string = '';
  constructor(private articleService: ArticleService, private toastService: MzToastService, private auth: AuthGuard, private authe: AuthenticationService, private router: Router) { }

  ngOnInit() {
     if(localStorage.getItem('currentUser')!=null && localStorage.getItem('userSenha')!=null && localStorage.getItem('currentUser')!=undefined && localStorage.getItem('userSenha')!=undefined){
      this.auth.canActivate().then((sessao) => {
        this.logado = sessao;
        if (this.logado == true) {
          let user = localStorage.getItem('currentUser');
          this.article.dono = user;
        }else{
          this.router.navigate(['/login']);
        }
      });
     }else{
      this.router.navigate(['/login']);
    } 
  }
  publicar() {
   if(!this.enviando){
    this.article.artigo=this.article.artigo.replace("[^\\p{ASCII}]","");
    this.articleService.create(this.article).then((res) => {
      if (res.success) {
        this.toastService.show('Publicado!', 4000, 'green');
        this.router.navigate(['/my']);
      } else {
        this.toastService.show('Reveja seus dados e publique novam!', 4000, 'green');
      }
    });

   }
  }
}

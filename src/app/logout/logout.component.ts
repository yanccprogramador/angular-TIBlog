import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../auth/auth.guard';
import {AuthenticationService} from "../auth/auth.service";
import { UserService } from "app/services/user.service";
import {MzToastService} from "ng2-materialize/dist";
import { Router } from "@angular/router";
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  usuario = { nome: "", senha: "" };
  logado: boolean = false;
  currentUser;
  private login: string = '';
  private password: string = '';
  constructor(private router: Router, private auth: AuthGuard, private authe: AuthenticationService, private userService: UserService, private toastService: MzToastService) { }

  ngOnInit() {

      this.auth.canActivate().then((sessao) => {

        this.logado = sessao;
        if (this.logado == true) {
          this.userService.getById(localStorage.getItem('currentUser')).then((art) => {
            this.usuario.nome = art.rows[0].nome;
            this.currentUser = localStorage.getItem('currentUser');
            this.usuario.senha=localStorage.getItem('userSenha');
          });
        }else{
          this.router.navigate(['/login']);
        }
      });
  }
  deslogar(): any {
    this.authe.logout();
    this.router.navigate(['/']);
  }
  update() {
    this.userService.update(this.usuario, localStorage.getItem('currentUser')).then((art) => {
      if (art.success) {
        this.toastService.show('Atualizado!', 4000, 'green');
        this.router.navigate(['/']);
      } else {
        this.toastService.show('Tente novamente!', 4000, 'red');
      }
    });
  }
  delUser() {
    this.userService.delete(localStorage.getItem('currentUser')).then((art) => {
      if (art.success) {
        this.toastService.show('Apagado!', 4000, 'green');
        localStorage.removeItem('currentUser');
        this.logado = false;
        this.router.navigate(['/']);
      } else {
        this.toastService.show('Tente novamente!', 4000, 'red');
      }
    });
  }
}

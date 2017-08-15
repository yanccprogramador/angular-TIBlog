import { Router } from '@angular/router';
import { AuthenticationService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login;
  password;
  logado;
  enviando=false;
  constructor(private authe:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }
   logar(): any {
     if (!this.enviando) {
        this.authe.login(this.login, this.password).then((log: boolean) => {this.logado = log
        if (this.logado == true) {
            this.router.navigate(['/user']);
      }
    });
    }
  }
}

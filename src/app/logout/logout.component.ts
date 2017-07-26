import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../auth/auth.guard';
import {AuthenticationService} from "../auth/auth.service";
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  logado: boolean=true;
  private login:string='';
  private password:string='';
  constructor(private auth:AuthGuard,private authe:AuthenticationService) { }
  ngOnInit(){

    this.logado=this.auth.canActivate();
     if ( this.logado == true) {

     }

    }
    logar():any{
      this.authe.login(this.login,this.password).then((log:boolean)=> this.logado=log);
    }
    deslogar():any{
      this.authe.logout();
      this.logado=this.auth.canActivate();
    }
}

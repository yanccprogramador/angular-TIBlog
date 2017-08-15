import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import * as sha1 from 'js-sha1';
import{MzToastService} from "ng2-materialize/dist";
import{Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService,private toastService: MzToastService,private router: Router) { }

  ngOnInit() {
  }
   login;
   enviando=false;
  existe:boolean=false;
   senha;
   nome;
  registrar():any{
    if(!this.enviando){
    this.userService.create({"login":this.login,"senha":this.senha,"nome":this.nome}).then((res)=>{
      if(res.success){
        this.toastService.show('Criado!', 4000, 'green');
        this.router.navigate(['/'], { });
      }
    });
    }
  }
  verifica(){
    this.userService.getById(this.login).then((art)=>{
      if(art.numLinhas==0){
        this.existe=false;
      }else{
        this.existe=true;
      }
    });
  }
}

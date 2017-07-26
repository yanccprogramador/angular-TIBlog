import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import * as sha1 from 'js-sha1';
import{MzToastService} from "ng2-materialize/dist"
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
  private login;
  private senha;
  private nome;
  registrar():any{
    this.userService.create({"login":this.login,"senha":sha1(this.senha),"nome":this.nome}).then((res)=>{
      if(res.success){
        this.toastService.show('Criado!', 4000, 'green');
        this.router.navigate(['/'], { });
      }
    });
  }
}

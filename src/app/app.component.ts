import { Component } from '@angular/core';
import {AuthGuard} from './auth/auth.guard';
import {AuthenticationService} from "./auth/auth.service";

import { Http, Headers, Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(){}

}

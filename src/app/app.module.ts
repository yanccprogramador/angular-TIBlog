import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthenticationService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {ArticleService} from "./services/articles.service";
import {UserService} from "./services/user.service";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticleService, UserService, AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

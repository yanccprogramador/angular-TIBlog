import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthenticationService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {ArticleService} from "./services/articles.service";
import {UserService} from "./services/user.service";
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms'
import{Http,HttpModule} from '@angular/http';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
	FormsModule
  ],
  providers: [ArticleService, UserService, AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

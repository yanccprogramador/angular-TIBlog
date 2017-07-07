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
import { PublishComponent } from './publish/publish.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PublishComponent,
    MyArticlesComponent
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

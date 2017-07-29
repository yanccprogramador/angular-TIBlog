import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthenticationService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
import {ArticleService} from "./services/articles.service";
import {UserService} from "./services/user.service";
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router'
import { FormsModule }  from '@angular/forms'
import{Http,HttpModule} from '@angular/http';
import { ArticlesComponent } from './articles/articles.component';
import { PublishComponent } from './publish/publish.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { MaterializeModule } from 'ng2-materialize';
import { ArticleComponent } from './article/article.component';
import { MzModalService } from 'ng2-materialize';


const routes:Routes = [
  {path:'', component:ArticlesComponent },
  {path:'publish', component:PublishComponent},
  {path:'my', component:MyArticlesComponent},
  {path:'user', component:LogoutComponent},
  {path:'register', component:RegisterComponent},
  {path:':id', component:ArticleComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PublishComponent,
    MyArticlesComponent,
    LogoutComponent,
    RegisterComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
	  FormsModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [ArticleService, UserService, AuthGuard, AuthenticationService,MzModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

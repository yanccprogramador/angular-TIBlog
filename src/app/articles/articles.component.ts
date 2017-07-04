import { Component, OnInit } from '@angular/core';
import {ArticleService} from "app/services/articles.service";
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent{

  constructor(private articleService: ArticleService) { }
   articles:any;
  listar():any{
    this.articles=this.articleService.getAll();
  }

}

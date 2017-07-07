import { Component, OnInit } from '@angular/core';
import {Article} from '../articles';
import {ArticleService} from "app/services/articles.service";
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
  articles;
  articleUnique;
  constructor(private articleService: ArticleService) { }
  ngOnInit(){
    this.articleService.getAll().then((art)=>this.articles=art);

  }

  abrir(id:number){
    this.articleService.getById(id).then((art)=>this.articleUnique=art);
    
  }

}

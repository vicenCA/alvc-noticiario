import { Component, OnInit } from '@angular/core';
import { iNews } from '../models/news.models';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-internacional',
  templateUrl: './internacional.component.html',
  styleUrls: ['./internacional.component.less']
})
export class InternacionalComponent implements OnInit {

  public inews: iNews[];
  public internacional: string = 'Internacional';
  public page: number = 1;

  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getNewsByCategory(this.internacional);
  }

}

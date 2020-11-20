import { Component, OnInit } from '@angular/core';
import { iNews } from '../models/news.models';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-culturales',
  templateUrl: './culturales.component.html',
  styleUrls: ['./culturales.component.less']
})
export class CulturalesComponent implements OnInit {

  public inews: iNews[];
  public culturales: string = 'Culturales';
  public page: number = 1;

  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getNewsByCategory(this.culturales);
  }

}

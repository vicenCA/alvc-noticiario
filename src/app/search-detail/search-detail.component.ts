import { Component, Input, OnInit } from '@angular/core';
import { iNews } from '../models/news.models';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.less']
})
export class SearchDetailComponent implements OnInit {
  public inews: iNews[];
  
  public filterSearch: string = '';
  public textSearch: string = ' ';
  public page: number = 1;


  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getAllNews();
  }

}

import { Component, OnInit } from '@angular/core';
import { iNews } from '../models/news.models';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-espectaculos',
  templateUrl: './espectaculos.component.html',
  styleUrls: ['./espectaculos.component.less']
})
export class EspectaculosComponent implements OnInit {
  
  public inews: iNews[];
  public espectaculos: string = 'Espectaculos';
  public page: number = 1;


  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getNewsByCategory(this.espectaculos);
  }



}

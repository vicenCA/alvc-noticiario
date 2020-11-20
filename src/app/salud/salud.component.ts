import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { iNews } from 'src/app/models/news.models';
import { NewsService } from '../services/news/news.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.less']
})
export class SaludComponent implements OnInit {

  public inews: iNews[];
  public salud: string = 'Salud';
  public page: number = 1;

  constructor(private newsService: NewsService){
  }
  ngOnInit(): void {
    this.inews = this.newsService.getNewsByCategory(this.salud);
  }

}

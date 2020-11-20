import { Component, Input, OnInit } from '@angular/core';
import { iNews } from 'src/app/models/news.models';

@Component({
  selector: 'app-news2-card',
  templateUrl: './news2-card.component.html',
  styleUrls: ['./news2-card.component.less']
})
export class News2CardComponent implements OnInit {

  @Input()
  public news: iNews;
  
  constructor() { }

  ngOnInit(): void {
  }

}

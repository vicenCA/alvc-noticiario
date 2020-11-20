import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { iNews, logoImage } from 'src/app/models/news.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']

})
export class NavbarComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  before = false;

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { iNews } from 'src/app/models/news.models';
import { NewsService } from '../services/news/news.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})
export class InicioComponent implements OnInit {
  public inews: iNews[];
  public Inicio: string = 'Inicio';
  public contador = 0;
  //public newsNuevas: iNews[];
  constructor(private newsService: NewsService){
  }

  ngOnInit(): void {
    this.inews = this.newsService.getAllNews();
    this.inews.sort(function (a, b) {
      if (a.views > b.views) {
        
        return -1;
      }
      if (a.views < b.views) {
        
        return 1;
      }
      // a must be equal to b 
    
      return 0;
    });

    
  }
  
  public Llego() : boolean {
    this.contador++;
    if (this.contador == 4) {
      
      return false;
    }
    else {
      if (this.contador < 4) {
        console.log(this.contador);
        return true;
      }
      
    }
   
  }
 
    
  
  
  
  
  
  
} 

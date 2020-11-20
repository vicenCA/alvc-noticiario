import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.less']
})
export class SugerenciasComponent implements OnInit {

  constructor() {
    console.log('constr')
   }

  ngOnInit(): void {
    console.log('oninit')
  }

}

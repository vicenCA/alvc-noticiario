import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.less']
})
export class SugerenciasComponent implements OnInit {

  formularioSugerencias: FormGroup;
  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.formularioSugerencias = this.fb.group({
      correoElectronico: ['', Validators.required, Validators.email],
      opinion: ['..', Validators.required],
      mensaje: ['..', Validators.required]
    })
    //console.log('oninit')
  }

  public Sugerencias(){
    const user= this.formularioSugerencias.value;
    console.log(user);
  }

}

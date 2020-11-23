import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators, AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.less']
})
export class RegistrarComponent implements OnInit {
  
  formularioRegistrar: FormGroup;

  constructor(private fb: FormBuilder ) { 
  }
  
  ngOnInit(): void {
    this.formularioRegistrar = this.fb.group({
      correoElectronico: ['', Validators.required, Validators.email],
      nombreYapellido: ['', Validators.required],
      nombreDeUsuario: ['', Validators.required],
      contraseña: ['', [Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]]
    });
  }
  
 public Register() {
    const user = this.formularioRegistrar.value;
       console.log(user);
      }

  
}

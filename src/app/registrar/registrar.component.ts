import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.less']
})
export class RegistrarComponent implements OnInit {
  formularioRegistrar: FormGroup;
  constructor(private fb: FormBuilder ) { }
//nombreDeUsuario: string;
//contraseña: string;

  
  ngOnInit(): void {
    this.formularioRegistrar = this.fb.group({
      nombreYapellido: ['', Validators.required],
      correoElectronico: ['', Validators.required, Validators.email],
      nombreDeUsuario: ['', Validators.required],
      contraseña: ['', [Validators.required, Validators.minLength]]
    });
  }

 /* private mayuscula(control: AbstractControl) {
    const nombreDeUsuario= control.value;

    let error= null;

    if (nombreDeUsuario.search(/[A-Z]/) == -1) {
      error = { ...error, letra : ' debe tener al menos una mayuscula'}
      return error

    }
    return ("Campo logrado");
  }
  */
  public Register() {
    const user = this.formularioRegistrar.value;
       console.log(user);
      }
  
      public getError(controlName: string): string {
        let error = '';
        const control = this.formularioRegistrar.get(controlName);
        if (control.touched && control.errors != null) {
          error = JSON.stringify(control.errors);
        }
        return error;
  }
  
  
}

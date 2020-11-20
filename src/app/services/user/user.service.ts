import { Injectable } from '@angular/core';
import { user } from 'src/app/components/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: user = new user();
  constructor() {
    this.user.correoElectronico = "vicho@gmail.com";
    this.user.nombreDeUsuario = " vicho1212";
    this.user.nombreYapellido = "Vicente Cisternas";
    this.user.contraseña = "vicho0000";
    this.user.usuarioId = 1;
   }
}

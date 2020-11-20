import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EspectaculosComponent } from './espectaculos/espectaculos.component';
import { NacionalComponent } from './nacional/nacional.component';
import { DetailComponent } from './detail/detail.component';
import { SaludComponent } from './salud/salud.component';
import { CulturalesComponent } from './culturales/culturales.component';
import { InternacionalComponent } from './internacional/internacional.component';
import { LoginComponent } from './login/login.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/Inicio', pathMatch: 'full'},
  {path : 'Inicio', component: InicioComponent},
  {path : 'Registrate', component: RegistrarComponent},
  {path: 'Espectaculo', component: EspectaculosComponent},
  {path: 'noticia/:id', component: DetailComponent},
  {path: 'Nacional', component: NacionalComponent},
  {path: 'Salud', component: SaludComponent},
  {path: 'Culturales',component: CulturalesComponent},
  {path: 'Internacional', component: InternacionalComponent},
  {path: 'Iniciar sesión', component: LoginComponent},
  {path: 'Sugerencias', component: SugerenciasComponent},
  {path: 'Buscar', component: SearchDetailComponent},
  {path: '**', redirectTo: '/Inicio'}
];
//ngmodule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgxPaginationModule } from 'ngx-pagination';

/* ------------------------------------------------------------------ */

/* Componentes Angular */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Vistas de Página */
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EspectaculosComponent } from './espectaculos/espectaculos.component';
import { NacionalComponent } from './nacional/nacional.component';
import { DetailComponent } from './detail/detail.component';
import { SaludComponent } from './salud/salud.component';
import { LoginComponent } from './login/login.component';
import { SugerenciasComponent} from './sugerencias/sugerencias.component';
import { CulturalesComponent } from './culturales/culturales.component';
import { InternacionalComponent } from './internacional/internacional.component';

/* Componentes Extras */
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { News2CardComponent } from './components/news2-card/news2-card.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

/* Servicios */
import { UserService } from './services/user/user.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FilterSearchPipe } from './pipe/filter-search.pipe';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistrarComponent,
    EspectaculosComponent,
    NacionalComponent,
    NewsCardComponent,
    NavbarComponent,
    DetailComponent,
    SaludComponent,
    CulturalesComponent,
    LoginComponent,
    CulturalesComponent,
    InternacionalComponent,
    FooterComponent,
    News2CardComponent,
    SugerenciasComponent,
    SugerenciasComponent,
    SearchDetailComponent,
    FilterSearchPipe,
    DarkmodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgxPaginationModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    UserService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }






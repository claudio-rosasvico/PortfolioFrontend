import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PortadaComponent } from './components/portada/portada.component';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { interceptorProvider } from './interceptors/pers-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { IdentidadComponent } from './components/identidad/identidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    PortadaComponent,
    LoginComponent,
    RegistroComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    IdentidadComponent
  ],
  imports: [
    
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    NgCircleProgressModule.forRoot({})
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

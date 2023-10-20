import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementosModule } from './elementos/elementos.module';
import { AcercadeComponent } from './acercade/acercade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Pais1Component } from './pais1/pais1.component';
import { Pais2Component } from './pais2/pais2.component';
import { Pais3Component } from './pais3/pais3.component';

import {FormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';

import {MatRadioModule} from '@angular/material/radio';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { BarrademenuComponent } from './barrademenu/barrademenu.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

import { MatGridListModule } from '@angular/material/grid-list';
import { PacienteComponent } from './paciente/paciente.component';  

import {MatPaginatorModule} from '@angular/material/paginator';
import { ListaComponent } from './lista/lista.component';

import { MatTableModule } from '@angular/material/table';
import { DialogoComponent } from './dialogo/dialogo.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ReservaDeHorasComponent } from './reserva-de-horas/reserva-de-horas.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { CitasMedicasComponent } from './citas-medicas/citas-medicas.component';

import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    BarraLateralComponent,
    Pais1Component,
    Pais2Component,
    Pais3Component,
    BarrademenuComponent,
    HomeComponent,
    PacienteComponent,
    ListaComponent,
    DialogoComponent,
    ReservaDeHorasComponent,
    DashboardComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    CitasMedicasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementosModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    CollapseModule,
    SharedModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

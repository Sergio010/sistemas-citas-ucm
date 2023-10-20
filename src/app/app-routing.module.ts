import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementosModule } from './elementos/elementos.module';
import { AcercadeComponent } from './acercade/acercade.component';
import { DadoComponent } from './elementos/dado/dado.component';
import { ArticulosService } from './articulos.service';


import { PacienteComponent } from './paciente/paciente.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path: 'login', component: LoginComponent
},

{
  path: 'registro-usuario', component: RegistroUsuarioComponent
},

{
  path: 'home', component: HomeComponent
},

{
},
{
},

{
  path:'paciente',component:PacienteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

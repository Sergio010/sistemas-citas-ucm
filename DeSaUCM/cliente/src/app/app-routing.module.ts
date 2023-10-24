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
import { ReservaDeHorasComponent } from './reserva-de-horas/reserva-de-horas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitasMedicasComponent } from './citas-medicas/citas-medicas.component';
import { FormCitaComponent } from './form-cita/form-cita.component';

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
  path: 'dashboard', component: DashboardComponent, children:
  [{path:'reserva-cita',component:ReservaDeHorasComponent},
   {path:'citas-medicas',component:CitasMedicasComponent},
    {path:'registro-usuario',component:RegistroUsuarioComponent},
    {path: 'form-cita', component: FormCitaComponent}
    ],
  
},

{
  path: 'citas-medicas', component: CitasMedicasComponent
},

{
  path: 'reserva-cita', component: ReservaDeHorasComponent
},

{
  path:'paciente',component:PacienteComponent
},

{
  path:'dashboard',component:DashboardComponent
},

{
  path:'**',redirectTo:'home'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

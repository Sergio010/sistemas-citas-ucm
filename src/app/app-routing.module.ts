import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementosModule } from './elementos/elementos.module';
import { AcercadeComponent } from './acercade/acercade.component';
import { DadoComponent } from './elementos/dado/dado.component';
import { ArticulosService } from './articulos.service';

import { Pais1Component } from './pais1/pais1.component';

import { Pais2Component } from './pais2/pais2.component';

import { Pais3Component } from './pais3/pais3.component';

const routes: Routes = [
{
  path:'acercade', 
  component :AcercadeComponent
},

{
  path:'dado',component: DadoComponent
},

{
  path:'pais1',component:Pais1Component
},

{
  path:'pais2',component:Pais2Component
},
{
  path:'pais3',component:Pais3Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

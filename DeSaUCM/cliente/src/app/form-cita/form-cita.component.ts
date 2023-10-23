import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';





@Component({
  selector: 'app-form-cita',
  templateUrl: './form-cita.component.html',
  styleUrls: ['./form-cita.component.css'],

})



export class FormCitaComponent implements OnInit {


  prevs:string[]=["Fonasa","Isapre"];

   

  medicos: Medico[] = [ new Medico(1,'Juan perez', 0, 'Oftalmologia',new Date(Date.now())),
                      new Medico(2,'Alberto', 1, 'Cardiologia',new Date(Date.now())),
                      new Medico(3,'Enrique', 2, 'Medicina General',new Date(Date.now())),
                      new Medico(4,'Matias', 3, 'Psicologia',new Date(Date.now())),

  ] 


  constructor(){}

  ngOnInit() {}

}


export class Medico {
  constructor(public codigo_medic: number,public  nombre_medic : string, 
    public codigo_espec:number, public especialid:string, public fecha : Date){

    this.codigo_medic = codigo_medic;
    this.nombre_medic = nombre_medic;
    this.codigo_espec = codigo_espec;
    this.especialid = especialid;
    this.fecha = fecha;

  }
}

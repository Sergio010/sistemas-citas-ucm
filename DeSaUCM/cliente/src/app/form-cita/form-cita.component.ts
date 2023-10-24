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

  
  horas : string[]=['23/03/2023', '23/01/2023','14/06/2023'];

   

  medicos: Medico[] = [ new Medico(1,'Juan perez', 0, 'Oftalmologia',new Date(Date.now())),
                      new Medico(2,'Alberto', 1, 'Cardiologia',new Date(Date.now())),
                      new Medico(3,'Enrique', 2, 'Medicina General',new Date(Date.now())),
                      new Medico(4,'Matias', 3, 'Psicologia',new Date(Date.now())),

  ] 

  objt: Object[] = [new Especialidad(1,'Oftalmologia'),
                   new Medico(0,'',2,'',new Date),
                   new Fecha(0, new Date(Date.now())),

                   new Reserva(1,new Medico(0,'',2,'',new Date),new Especialidad(1,'Oftalmologia'),
                   new Fecha(0, new Date(Date.now())))
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

export class Especialidad {
  constructor( 
    public codigo_espes:number, public n_especialid:string){

    this.codigo_espes = codigo_espes;
    this.n_especialid = n_especialid;

  }
}

export class Fecha {
  constructor( 
    public codigo_fecha: number, public fecha:Date){

    this.codigo_fecha = codigo_fecha;
    this.fecha = fecha;

  }
}

export class Reserva{
  constructor( 
    public id_reserva: number, public Medico: Medico, public Espe:Especialidad, public fecha_h: Fecha){
    
    this.id_reserva = id_reserva;
    this.Medico = Medico;
    this.Espe = Espe;
    this.fecha_h = fecha_h;

  }
}
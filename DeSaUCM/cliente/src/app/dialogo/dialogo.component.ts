import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//import {Articulo} from '../articulo';

import { Cita } from '../cita';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogoComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Cita) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
/*
export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}
*/
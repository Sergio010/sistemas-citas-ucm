import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Articulo} from '../articulo';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogoComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Articulo) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
import { Component,ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { MatMenu } from '@angular/material/menu';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Articulo } from 'src/app/articulo';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

import { Cita } from '../cita';

@Component({
  selector: 'app-reserva-de-horas',
  templateUrl: './reserva-de-horas.component.html',
  styleUrls: ['./reserva-de-horas.component.css']
})

export class ReservaDeHorasComponent {
  columnas: string[] = ['codigo', 'nombre_medico','fecha'];

  datos: Cita[] = [new Cita(1,'Lautaro Martinez', '12/02/2023'),
                  new Cita(2,'Lautaro Martinez', '17/02/2023'),

  ];

  ds = new MatTableDataSource<Cita>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Cita>;

  constructor(public dialog: MatDialog) { }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(DialogoComponent, {
      data: new Cita(0, '','')
    });

    dialogo1.afterClosed().subscribe(cit => {
      if (cit != undefined)
        this.agregar(cit);
    });
  }

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }
  agregar(cit: Cita) {
    this.datos.push(new Cita(cit.codigo,
      cit.nombre_medico,cit.fecha_cita,));
    this.tabla1.renderRows();
  }
}


/*
export class ReservaDeHorasComponent {

  
  resultado!: string;

  constructor(private fb: FormBuilder) { }

  formularioCita = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    mail: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]]
  });

  submit() {
    if (this.formularioCita.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

  */
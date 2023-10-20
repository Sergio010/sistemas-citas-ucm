import { Component,ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { MatMenu } from '@angular/material/menu';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Articulo } from 'src/app/articulo';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reserva-de-horas',
  templateUrl: './reserva-de-horas.component.html',
  styleUrls: ['./reserva-de-horas.component.css']
})

export class ReservaDeHorasComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

  datos: Articulo[] = [new Articulo(1, 'papas', 55),
  new Articulo(2, 'manzanas', 53),
  new Articulo(3, 'naranjas', 25),
  ];

  ds = new MatTableDataSource<Articulo>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  constructor(public dialog: MatDialog) { }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(DialogoComponent, {
      data: new Articulo(0, '', 0)
    });

    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined)
        this.agregar(art);
    });
  }

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }
  agregar(art: Articulo) {
    this.datos.push(new Articulo(art.codigo, art.descripcion, art.precio));
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
import { Component , ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Articulo } from 'src/app/articulo';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

import { Paciente} from 'src/app/paciente';
import { Cita } from '../cita';
import { formatDate } from '@angular/common';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-citas-medicas',
  templateUrl: './citas-medicas.component.html',
  styleUrls: ['./citas-medicas.component.css']
})

export class CitasMedicasComponent {
  columnas: string[] = ['codigo','nombre_medico','fecha_cita','borrar','modificar'];

  datos: Cita[] = [new Cita(1,'Lautaro Martinez', '12/02/2023'),
                  new Cita(2,'Enzo Fernandez', '17/02/2023'),
                  new Cita(2,'Dibu Martinez', '17/02/2023'),
                  new Cita(2,'Julian Alvarez', '23/02/2023'),
                  new Cita(2,'Lautaro Martinez', '17/02/2023'),

];


  ds = new MatTableDataSource<Cita>(this.datos);

  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  @ViewChild(MatTable) tabla1!: MatTable<Cita>;

  constructor(public dialog: MatDialog) { }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(DialogoComponent, {
      data: new Cita(0, '',''),
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
    this.datos.push(new Cita(cit.codigo,cit.nombre_medico,cit.fecha_cita));
    this.tabla1.renderRows();
  }

}




import { Component , ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Articulo } from 'src/app/articulo';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-citas-medicas',
  templateUrl: './citas-medicas.component.html',
  styleUrls: ['./citas-medicas.component.css']
})

  export class CitasMedicasComponent{
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


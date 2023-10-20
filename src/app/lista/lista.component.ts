import { Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  columnas: string[] = ['Codigo', 'id_paciente','valor'];

  datos: Articulo[] = [];
  dataSource:any;
  today = new Date();


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  ngOnInit() {
    for (let x = 1; x <= 100; x++)
      this.datos.push(new Articulo(x, `artículo ${x}`, Math.trunc(Math.random() * 1000),));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }
}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }

}

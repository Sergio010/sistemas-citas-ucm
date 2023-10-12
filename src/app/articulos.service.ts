import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgFor } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  retornar(){
    return this.http.get("https://scratchya.com.ar/vue/datos.php")
   
  }
}

  


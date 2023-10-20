import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    links = [
      {
        name: "Inicio",
        url: ""
      },
      {
        name: "Lista",
        url: "list"
      },
      {
        name: "Formulario",
        url: "form"
      }
    ];
}

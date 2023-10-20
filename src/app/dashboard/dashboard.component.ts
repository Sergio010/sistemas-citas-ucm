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
        url: "home"
      },
      {
        name: "Mis Citas",
        url: "citas-medicas"
      },
      {
        name: "Reserva de cita",
        url: "reserva-de-horas"
      }
    ];
}

import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reserva-de-horas',
  templateUrl: './reserva-de-horas.component.html',
  styleUrls: ['./reserva-de-horas.component.css']
})
export class ReservaDeHorasComponent {
  resultado!: string;

  constructor(private fb: FormBuilder) { }

  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    mail: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]]
  });

  submit() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}

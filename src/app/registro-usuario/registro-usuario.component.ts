import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  resultado!: string;

  constructor(private fb: FormBuilder) { }

  formularioRegistro = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    apellido:['',Validators.required],
    rut:['',Validators.required],
    mail: ['', [Validators.required, Validators.email]],
    telefono:['',Validators.required],
    password:['',Validators.required],
    repeatPass:['',Validators.required]
  });

  submit() {
    if (this.formularioRegistro.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

}

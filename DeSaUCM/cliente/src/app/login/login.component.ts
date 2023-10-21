import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ValidationErrors } from '@angular/forms';

interface IRegisterForm{
  name: string;
  email: string;
  password: string;
  repeatPass : string;

}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  register: IRegisterForm = {
    name: "",
    email: "",
    password: "",
    repeatPass: ""

  };

  constructor(){}

  submit(){}

}





/*

  //añadimos propiedades
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder:FormBuilder){}




  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
        { //inicializamos los campos del formulario
          name : ["",Validators.required],
          email: ["",Validators.required,Validators.email],
          password:["",[Validators.required,Validators.minLength(6)]] ,
          repeatPass: ["",Validators.required]
        },

        {
          validator : this.MustMatch ("password","repeatPass") //validando
        }
    );
  }

  MustMatch(controlName:string, matchingControlName: string){
    return(formGroup:FormGroup)=>{
      const control = form.Group.controls[controlName];
      const matchingControl = form.Group.controls[matchingControlName];
    }
    if(matchingControlName.errors && !matchingControlName.errors.MustMatch){
      //return if another validator has already found an error on the matchingControl
      return;
    }

    if(controlName.value != matchingControlName.value){
      matchingControl.setErrors({MustMatch : true});
    }else{
      matchingControl.setErrors(null);
    }


  }

  get form(){
    retunr this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    //stop here if form is invalid

    if(this.registerForm.invalid){
      return;
    }

    alert( //display form values on sucess
      "Registro Exitoso" + JSON.stringify(this.registerForm.value,null,4)
    )
  }

  onReset(){
    this.submitted=false; 
    this.registerForm.reset();
  }

*/









/*

 form: FormGroup;
 
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }
 
  onSubmit() {
    // aquí puede acceder a los valores del formulario mediante this.form.value
    console.log(this.form.value);
  }
  

*/
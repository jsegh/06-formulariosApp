import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.emailValidator]],//asincrona
    //email: ['', [Validators.required, Validators.email]]//no va muy fina
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },{
    validators: [this.vs.camposIguales('password','password2')

    ]
  })


  get emailErrorMsg():string {

    const errors = this.miFormulario.get('email')?.errors;
    if (this.miFormulario.get('email')?.touched){
      if (errors?.['required'] ){
        return 'El correo es obligatorio';
      } else if (errors?.['pattern']){
        return 'Debe ser en formato de email';
      } else if (errors?.['emailTomado']){
        return 'El email ya está en uso';
      }
    }
    return '';
  }

  constructor(private fb:FormBuilder, private vs:ValidatorService, private emailValidator:EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'mel on',
      email: 'test1@test.com',
      username: 'js',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

/*   emailRequired(campo:string){
    return this.miFormulario.get(campo)?.errors?.['required'] && this.miFormulario.get(campo)?.touched;
  }

  emailFormato(campo:string){
    return this.miFormulario.get(campo)?.errors?.['pattern'] && this.miFormulario.get(campo)?.touched;
  }

  emailEnUso(campo:string){
    return this.miFormulario.get(campo)?.errors?.['emailTomado'] && this.miFormulario.get(campo)?.touched;
  } */

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
  }
}

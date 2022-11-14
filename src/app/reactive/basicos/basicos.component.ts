import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit{

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'aaaa',
      precio: 11,
      //existencias: 11,
    })
    
  }

  /*
  miFormulario:FormGroup = new FormGroup({
    nombre: new FormControl('RTX4040TI'),
    precio: new FormControl(1500),
    existencias: new FormControl(5)
  });
  */

  miFormulario:FormGroup = this.formBuilder.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)], ], //valor, validadores sincronos , validadores asincronos
    precio: [0 ,[Validators.required, Validators.min(0)],],
    existencias: [ 0,[Validators.required, Validators.min(0)],],
  })

  campoNoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;

  }

  guardar(){

    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}

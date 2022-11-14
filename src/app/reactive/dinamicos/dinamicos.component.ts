import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',

})
export class DinamicosComponent implements OnInit {

  miFormulario:FormGroup = this.formBuilder.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)], ],
    favoritos: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Op Flashpoint', Validators.required],
    ], Validators.required)
  })

  miNuevoFavorito: FormControl = this.formBuilder.control('',Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(){
    if (this.miFormulario.valid){
      console.log(this.miFormulario);
    }else{
      this.miFormulario.markAllAsTouched();
    }
  }

  borrar(i: number){
    this.favoritosArr.removeAt(i);
  }

  campoNoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;

  }

  agregarFavorito(){
    if (this.miNuevoFavorito.invalid){
      return;
    }

    //this.favoritosArr.push(new FormControl(this.miNuevoFavorito.value, Validators.required));
    this.favoritosArr.push(this.formBuilder.control(this.miNuevoFavorito.value, Validators.required));
    this.miNuevoFavorito.reset();
  }

}

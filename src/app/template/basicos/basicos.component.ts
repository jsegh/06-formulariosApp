import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit {

  //@Input()

  //@Output()

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto:'eeeee',
    precio: 22,
    existencias: 55
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log("submit");
    console.log(this.miFormulario.value);

    this.miFormulario.resetForm({
      precio:0,
      existencias:5
    });
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched;
  }

  precioValido(): boolean{
    return this.miFormulario?.controls['precio']?.invalid &&
      this.miFormulario?.controls['precio']?.touched;
  }

}

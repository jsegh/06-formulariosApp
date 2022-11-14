import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre:string,
  favoritos:Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
})
export class DinamicosComponent  {

  nuevoJuego:string = '';

  persona:Persona = {
    nombre:'Javier',
    favoritos: [
      { id:1, nombre:'Metal Gear'},
      { id:2, nombre:'Op Flashpoint'}
    ]
  }


  guardar(){
    console.log("posteado");
  }

  eliminar (i:number){
    this.persona.favoritos.splice(i,1);
  }

  agregar (){
    this.persona.favoritos.push({...{ id:this.persona.favoritos.length + 1, nombre:this.nuevoJuego}});
    this.nuevoJuego='';
  }
}

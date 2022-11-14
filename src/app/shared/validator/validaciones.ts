import { FormControl } from '@angular/forms';

    //obsoleto, tiro del servicio

  export const nombreApellidoPattern:string = '([a-zA-Z]+) ([a-zA-Z]+)';//nombre espacio apellido
  export const emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  export const noPuedeSerStrider = (control:FormControl) => {//validacion sincrona
    const valor = control.value?.trim().toLowerCase();
    if (valor==='strider'){
      return {
        noStrider:true
      }
    }
    return null;
  }
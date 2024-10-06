import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  

  exito(title: string ,text = ""){
    Swal.fire({
      position: "center",
      icon: "success",
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 2500
    });
  }

  fails(title = "", text = ""){
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 2500,
    });
  }

  warning(text = ""){
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Alerta",
      text: text,
      showConfirmButton: false,
      timer: 2500,
    });
  }

  info(title = "", text = ""){
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 2500,
    });
  }

  delete(
    title: string,
    text?: string,
    icon: 'warning' = 'warning',
    confirmButtonText: string = 'Eliminar',
    cancelButtonText: string = 'Cancelar'): Promise<any>{
    return Swal.fire({
      title: '¿Seguro que deseas eliminar?',
      text: 'Esta acción es irreversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
  });
}

}

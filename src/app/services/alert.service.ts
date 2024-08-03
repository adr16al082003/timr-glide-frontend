import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  sesion(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Iniciado con exito",
      text: "Bienvenido",
      showConfirmButton: false,
      timer: 1500
    });
  }  

  exito(text = ""){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: text,
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

}

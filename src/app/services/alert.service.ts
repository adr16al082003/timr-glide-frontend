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

  fails(text = ""){
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Opsss..",
      text: text,
      showConfirmButton: false,
      timer: 2500
    });
  }

  warning(text = ""){
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Opsss..",
      text: text,
      showConfirmButton: false,
      timer: 2500
    });
  }

}

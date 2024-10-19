import { Component } from '@angular/core';
import { HeaderFormComponent } from 'src/app/components/header-form/header-form.component';
import { Cliente } from 'src/app/models/cliente.model';
import { Colum } from 'src/app/models/configForms.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  
  descartView: boolean = true;
  openModal: boolean = false;

  parroquia_iso: { id: number | string, name: string }[] = [
    { id: 1, name: 'Guatire' },
    { id: 2, name: 'Bolivar' },
  ]

  constructor(

  ){}

    customer: Cliente = new Cliente(); 

  /**
   * funcion para agregar con el boton +
   */

  agregar(e:any){
    this.customer = new Cliente();
    this.openModal = true;
    this.descartView = true
  }

  /**
   * esto son los campos y el cuerpo de la tabla dinamica
   */
  labelTablaUser: Colum[] = [
    { label: 'Id', key: 'id', visible: true },
    { label: 'Nombre', key: 'nombre', visible: true },
    { label: 'Identificacion', key: 'identificacion', visible: true },
    { label: 'Nacionalidad', key: 'identificacion_iso', visible: true },
    { label: 'Telefono', key: 'telefono', visible: true },
    { label: 'Direccion', key: 'direcciones', visible: true },
    { label: 'Genero', key: 'genero', visible: true},
    { label: 'Parroquia', key: 'nombre_parroquia', visible: true},
  ]

  dataTabla: Cliente[] = []

  /**
   * metodo para el boton descartar
   */

  clean(){
    this.customer = new Cliente();
  }

}

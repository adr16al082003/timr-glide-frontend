import { Component, EventEmitter, Output } from '@angular/core';
import { ModalDinamicComponent } from 'src/app/components/modal-dinamic/modal-dinamic.component';
import { Usuario } from 'src/app/models/People.model';
import { NgForm } from '@angular/forms';
import { HeaderFormComponent } from 'src/app/components/header-form/header-form.component';
import { Colum } from 'src/app/models/configForms.model';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  @Output() btn_descart: EventEmitter<any> = new EventEmitter();

  openModal: boolean = false;

  /*funcion para agg desde el modal*/
  con(A: any) {
    console.log(this.user);

  }
  user: Usuario = new Usuario();

  /* funcion para abrir el modal con el boton + */
  agregar(E: any) {
    this.openModal = true;
  }


  /* esto son los campos y el cuerpo de la tabla dinamica*/
  labelTablaUser: Colum[] = [
    { label: 'Id', key: 'id', visible: true },
    { label: 'Nombre', key: 'nombre', visible: true },
    { label: 'Usuario', key: 'usuario', visible: true },
    { label: 'Clave', key: 'clave', visible: true },
    { label: 'Rol', key: 'rol', visible: true },
  ]

  dataTabla: any[] = [
    { id: 1, nombre: 'Juan', usuario: 'juan16', clave: 'ju18an32', rol: 'operador' },
    { id: 2, nombre: 'Adrian', usuario: 'Adridev', clave: '1608*adr', rol: 'administrador' },
  ]

  clean(R:any) {
    this.user.nombre = '';
    this.user.user = '';
    this.user.clave = '';
    this.user.cargo = '';

    this.btn_descart.emit();
  }

}

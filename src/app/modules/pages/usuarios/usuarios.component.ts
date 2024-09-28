import { Component, EventEmitter, Output } from '@angular/core';
import { ModalDinamicComponent } from 'src/app/components/modal-dinamic/modal-dinamic.component';
import { Usuario } from 'src/app/models/People.model';
import { NgForm } from '@angular/forms';
import { HeaderFormComponent } from 'src/app/components/header-form/header-form.component';
import { Colum } from 'src/app/models/configForms.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../services/user.service';
import { AlertService } from 'src/app/services/alert.service';
import { findIndex } from 'rxjs';
import { ToasDeleteComponent } from 'src/app/components/toas-delete/toas-delete.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  descartView: boolean = true;

  openModal: boolean = false;

  searchTerm = '';

  constructor(
    private usuarioService: UsuarioService,
    private alertService: AlertService
  ) { }

  user: Usuario = new Usuario();

  /* funcion para abrir el modal con el boton + */
  agregar(E: any) {
    this.openModal = true;
    this.descartView = true;
  }


  /* esto son los campos y el cuerpo de la tabla dinamica*/
  labelTablaUser: Colum[] = [
    { label: 'Id', key: 'id', visible: true },
    { label: 'Nombre', key: 'nombre', visible: true },
    { label: 'Usuario', key: 'usuario', visible: true },
    { label: 'Clave', key: 'clave', visible: true },
    { label: 'Rol', key: 'cargo', visible: true },
  ]

  /* propiedad para el cuerpo de la tabla */
  dataTabla: Usuario[] = []

  /* metodo para el boton descartar */

  clean() {
    this.user = new Usuario();
  }

  /* metodo para crear usuario */

  createUser() {
    this.usuarioService.createUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.clean();
        this.dataTabla.push(data[0]);
        this.openModal = false;
        this.alertService.exito('Usuario creadado con exito');
      },
      error: (error) => {
        console.log(error);
        this.alertService.fails('Error al registrar usuario')
      }
    });
  }

  ngOnInit() {
    this.listUser();
  }

  /* metodo para listar usuario en la tabla */

  listUser() {
    this.usuarioService.listUser().subscribe({
      next: (data) => {
        this.dataTabla = data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

/* metodo para abrir modal de editar*/

  asignarForm(usuario: Usuario) {
    this.openModal = true;
    this.user = usuario;
    this.descartView = false;
  }

  /* metodo para editar usuario */

  editUser() {
    this.usuarioService.editUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        const userIndex = this.dataTabla.findIndex(Usuario => Usuario.id === this.user.id);
        this.dataTabla[userIndex] = data[0];
        this.openModal = false;
        this.alertService.exito('Usuario editado con exito')
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  /* metodo para crear o editar*/

  asignarUsuario() {
    console.log(this.user);
    if (this.user.id != 0) {
      this.editUser();
    } else {
      this.createUser();
    }
  }

  /*
  deleteUser(user:Usuario) {
    this.usuarioService.deleteUser(user).subscribe({
      next: (data) => {
        console.log(data);
        const userIndex = this.dataTabla.findIndex(Usuario => Usuario.id === user.id);
        this.dataTabla.splice(userIndex, 1);
        this.alertService.exito('Borrado exitosamente')
      },
      error: (error) => {
        console.log(error);
      }
    });
  } */


  /*  Promesa de borrar usuario          */
  deleteUser(user: Usuario) {
    Swal.fire({
      title: '¿Seguro que deseas eliminar?',
      text: 'Esta acción es irreversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        return this.usuarioService.deleteUser(user).toPromise();
      } else {
        throw new Error('Eliminación cancelada');
      }
    }).then((data) => {
      console.log(data);
      const userIndex = this.dataTabla.findIndex(Usuario => Usuario.id === user.id);
      this.dataTabla.splice(userIndex, 1);
      Swal.fire('Eliminado con éxito', '', 'success');
    }).catch((error) => {
      console.log(error);
      Swal.fire('Error al eliminar', '', 'error');
    });
  }

  

}




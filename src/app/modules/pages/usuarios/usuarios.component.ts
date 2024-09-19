import { Component, EventEmitter, Output } from '@angular/core';
import { ModalDinamicComponent } from 'src/app/components/modal-dinamic/modal-dinamic.component';
import { Usuario } from 'src/app/models/People.model';
import { NgForm } from '@angular/forms';
import { HeaderFormComponent } from 'src/app/components/header-form/header-form.component';
import { Colum } from 'src/app/models/configForms.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../services/user.service';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {


  openModal: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private alertService: AlertService
  ){}

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
    { label: 'Rol', key: 'cargo', visible: true },
  ]

  dataTabla: Usuario[] = []

  clean() {
    this.user = new Usuario();
  }

  update(usuario:Usuario){
    console.log(usuario)
  }

  
  createUser(){
    this.usuarioService.createUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.clean();
        this.dataTabla.push(data);
        this.openModal = false;
        this.alertService.exito('Usuario creadado con exito');
      },
      error: (error) => {
        console.log(error);
        this.alertService.fails('Error al registrar usuario')
      }
    });
  }

  ngOnInit(){
    this.listUser();
  }

  listUser(){
    this.usuarioService.listUser().subscribe({
      next: (data) => {
        this.dataTabla = data;
      },
      error: (error) => {
        console.log(error);
      }
  })
  }
}

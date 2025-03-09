import { Component } from '@angular/core';
import { Access, Modules } from 'src/app/models/People.model';
import { Colum } from 'src/app/models/configForms.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

descartView: boolean = true;
openModal: boolean = false;

permission: Access = new Access(); 

agregar(e:any){
  this.permission = new Access();
  this.openModal = true;
  this.descartView = true;
}

labelTablaRoles: Colum[] = [
  {label: 'Id', key: 'id', visible: true},
  {label: 'Nombre', key: 'nombre', visible:true},
  {label: 'Crear', key: 'crear', visible: true},
  {label: 'Actualizar', key: 'actualizar', visible: true },
  {label: 'Eliminar', key: 'eliminar', visible: true},
]

dataTable: Access[] = [];

assignModule(modules:string){
  console.log(modules);
}


clean(){
  this.permission = new Access();
}

craeteRol(){
  console.log(this.permission)
}





}

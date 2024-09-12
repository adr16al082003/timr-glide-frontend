import { Component, EventEmitter, Output } from '@angular/core';
import { ModalDinamicComponent } from 'src/app/components/modal-dinamic/modal-dinamic.component';
import { Usuario } from 'src/app/models/People.model';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  @Output() cerrar: EventEmitter<any> = new EventEmitter();

  @Output() conf : EventEmitter<any> = new EventEmitter();

  @Output() clean : EventEmitter<any> = new EventEmitter();

  close(C:any){
    console.log('cerrar');
  }

  con(A: string){
    console.log('confirmado');

  }

  reset(R:string){
    console.log('reset');
  
  }

  user = new Usuario();
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  imports: [ CommonModule],
  standalone: true,
  selector: 'app-modal-dinamic',
  templateUrl: './modal-dinamic.component.html',
  styleUrls: ['./modal-dinamic.component.css']
})
export class ModalDinamicComponent {

  @Input() title: string = 'Registro de Usuario';
  
  @Output() btn_cerrar : EventEmitter<any> = new EventEmitter();

  @Output() btn_conf : EventEmitter<any> = new EventEmitter();

  @Output() btn_clean : EventEmitter<any> = new EventEmitter();

  cerrar(C:String){
    console.log('Cerrar');
  }

  conf(A: string){
    console.log('confirmado');
  }

  reset(R:string){
    console.log('reset');
    
  }

  mostrarModal = false ;

  abrirModal(){
    this.mostrarModal = true;
  }

  cerrarModal(){
    this.mostrarModal = false;
  }
}

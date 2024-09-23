import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { Access, Usuario } from 'src/app/models/People.model';
import { UsuariosComponent } from 'src/app/modules/pages/usuarios/usuarios.component';
@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-modal-dinamic',
  templateUrl: './modal-dinamic.component.html',
  styleUrls: ['./modal-dinamic.component.css']
})
export class ModalDinamicComponent {
  


  constructor(
    private alertService: AlertService
  ) { }

  @Input() view_descart: boolean = true;

  @Input() mostrarModal: boolean = false;
  @Output() mostrarModalChange: EventEmitter<boolean> = new EventEmitter();

  @Input() title: string = 'Registro de Usuario';

  @Output() btn_cerrar: EventEmitter<any> = new EventEmitter();

  @Output() btn_conf: EventEmitter<any> = new EventEmitter();

  @Output() btn_descart: EventEmitter<any> = new EventEmitter();

  @Output() btn_close_modal: EventEmitter<any> = new EventEmitter();

  closeModal() {
    this.mostrarModal = false;
    this.mostrarModalChange.emit(this.mostrarModal);
    this.btn_close_modal.emit();
    this.btn_cerrar.emit();
  }

}

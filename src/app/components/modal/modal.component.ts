import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'; 

@Component({
  imports: [CommonModule],
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  modal(){
    Swal.fire({
      title: "Registro",
      input: "text",
      inputPlaceholder: "Enter you name",
    });
  }
}

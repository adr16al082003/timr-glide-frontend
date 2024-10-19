import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { CustomDropdownComponent } from "../custom-dropdown/custom-dropdown.component"; 

@Component({
  imports: [CommonModule, CustomDropdownComponent],
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


}

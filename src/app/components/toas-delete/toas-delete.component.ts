import { CommonModule } from '@angular/common';
import { Component,  EventEmitter, Input, Output } from '@angular/core';


@Component({
  imports: [CommonModule],
  standalone:true,
  selector: 'app-toas-delete',
  templateUrl: './toas-delete.component.html',
  styleUrls: ['./toas-delete.component.css']
})
export class ToasDeleteComponent {

@Input() toasModal: boolean = true;

}

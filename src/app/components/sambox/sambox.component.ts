import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sambox',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './sambox.component.html',
  styleUrls: ['./sambox.component.css']
})
export class SamboxComponent {

  @Output() btn_edit: EventEmitter<any> = new EventEmitter();

  @Output() btn_delete: EventEmitter<any> = new EventEmitter();
}


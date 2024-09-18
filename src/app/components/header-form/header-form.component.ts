import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDinamicComponent } from '../modal-dinamic/modal-dinamic.component';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent  {


  @Output() btn_agg: EventEmitter<any> = new EventEmitter();
  
  
agregar(E:any){
  console.log()
}

}

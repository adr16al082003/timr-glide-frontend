import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamboxComponent } from "../sambox/sambox.component";
import { Colum } from 'src/app/models/configForms.model';
import { FormsModule } from '@angular/forms';
import { HeaderFormComponent } from "../header-form/header-form.component";
import { UsuariosComponent } from 'src/app/modules/pages/usuarios/usuarios.component';
import { ToasDeleteComponent } from "../toas-delete/toas-delete.component";


@Component({
  imports: [CommonModule, SamboxComponent, FormsModule, HeaderFormComponent, ToasDeleteComponent],
  standalone: true,
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  openToas: boolean = false 

  @Input() title: string = 'Usuarios';

  @Input() colums: Colum[] = [new Colum()];

  @Input() data: any[] = [];

  @Output() edit: EventEmitter<any> = new EventEmitter();

  @Output() delete: EventEmitter<any> = new EventEmitter();



  Eliminar(E:any){
    console.log('si elimina')
  }

}

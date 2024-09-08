import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from 'src/app/models/People.model';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() user: Usuario = new Usuario()
  /**
   *evento para salir del sistema
   *
   * @type {EventEmitter<any>}
   * @memberof HeaderComponent
   */
  @Output() logout: EventEmitter<any> = new EventEmitter<any>()
}

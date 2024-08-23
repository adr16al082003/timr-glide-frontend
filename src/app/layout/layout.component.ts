import { Component, OnInit } from '@angular/core';
import { Colum } from '../models/configForms.model';
import { menuDashboard } from './menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  menus: any[] = []
  ngOnInit(): void {
    this.menus = menuDashboard
  }

  columsUser: Colum[] = [
    { label: 'id', key:"id" },
    { label: 'nombre', key:"nombre" },
    { label: 'cargo', key:"rol" },
  ]

  userListar: any[]= [
    { id: 1, nombre: 'Juan', rol: 'Gerente' },
    { id: 2, nombre: 'Pedro', rol: 'Gerente' },
    { id: 3, nombre: 'adrian', rol: 'Gerente' },
    { id: 3, nombre: 'adrian', rol: 'Gerente' },
    { id: 3, nombre: 'adrian', rol: 'Gerente' },
    { id: 6, nombre: 'adrian', rol: 'Gerente' },
  ]

  /**
   *Se encarga de desplegar el menu
   *
   * @memberof LayoutComponent
   */
  // openMenu(openLink: boolean = false) {
  //   const toggle = document.querySelector(".toggle")
  //   const menuDashboard = document.querySelector(".menu-dashboard") as any
  //   const iconoMenu = toggle?.querySelector("i") as any

  //   menuDashboard.classList.toggle("open")

  //   if (iconoMenu.classList.contains("bx-menu") ) {
  //     iconoMenu.classList.replace("bx-menu", "bx-x")
  //   } else {
  //     iconoMenu.classList.replace("bx-x", "bx-menu")
  //   }
  // }

    buttomEvent(item:any){
      console.log(item);
    }
}

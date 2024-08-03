import { Component, OnInit } from '@angular/core';
import { menuDashboard } from './menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  menus: any[] = []
  ngOnInit(): void {
    this.menus = menuDashboard
  }

  /**
   *Se encarga de desplegar el menu
   *
   * @memberof LayoutComponent
   */
  openMenu(openLink: boolean = false) {
    const toggle = document.querySelector(".toggle")
    const menuDashboard = document.querySelector(".menu-dashboard") as any
    const iconoMenu = toggle?.querySelector("i") as any

    menuDashboard.classList.toggle("open")

    if (iconoMenu.classList.contains("bx-menu") ) {
      iconoMenu.classList.replace("bx-menu", "bx-x")
    } else {
      iconoMenu.classList.replace("bx-x", "bx-menu")
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Colum } from '../models/configForms.model';
import { menuDashboard } from './menu';
import { LoginService } from '../services/auth.service';
import { Modules, Usuario } from '../models/People.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  usuario: Usuario = new Usuario()
  menus: any[] = []
  ngOnInit(): void {
    this.menus = menuDashboard
    this.usuario = this.loginService.getUser();
    this.setPermission(this.usuario.permissions as unknown as Modules[])
  }

  constructor(private loginService: LoginService,
    private router: Router) { }

  logout() {

    this.loginService.logout()
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

  /**
   * Setea los permisos de los modulos en el menu del sistema 
   *
   * @param {Modules[]} modules
   * @memberof LayoutComponent
   */
  setPermission(modules: Modules[]) {
    this.menus = this.menus.map(item => {
      const perm = modules.find(p => p.id === item.id);
      return { ...item, ...perm };
    });

  }
}

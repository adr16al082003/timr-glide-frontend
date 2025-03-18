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
    this.setPermission(this.usuario.permissions as unknown as Modules[] )
  }

  constructor(private loginService: LoginService, 
    private router:Router) { }

  logout(){

    this.loginService.logout()
  }

  navigate(url:string){
    this.router.navigate([url]);
  }

  setPermission(modules: Modules[]) {
    const menuMap = new Map(this.menus.map(menu => [menu.id, menu]));
  
    modules.forEach(module => {
      if (menuMap.has(module.id)) {
        Object.assign(menuMap.get(module.id), {
          view: module.view,
          create: module.create,
          update: module.update,
          delete: module.delete
        });
      }
    });
  console.log(menuMap)
  console.log(this.menus)
  }
}

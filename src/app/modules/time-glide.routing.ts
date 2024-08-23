import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


export const LayoutRoutes: Routes = [
  {
    path: '', component: DashboardComponent,
  },
  {
    path: 'usuarios', component: UsuariosComponent,
  }
];
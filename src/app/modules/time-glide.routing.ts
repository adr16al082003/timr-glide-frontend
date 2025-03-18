import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { RolesComponent } from './pages/roles/roles.component';
import { ReunionesComponent } from './pages/reuniones/reuniones.component';

export const LayoutRoutes: Routes = [
  { path: '', component: DashboardComponent, },
  { path: 'usuarios', component: UsuariosComponent, },
  { path: 'clientes', component: ClientesComponent, },
  { path: 'roles', component: RolesComponent, },
  { path: 'reuniones', component: ReunionesComponent},
];
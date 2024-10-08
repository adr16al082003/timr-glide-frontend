import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ModalDinamicComponent } from './components/modal-dinamic/modal-dinamic.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { LayoutComponent } from './layout/layout.component';
import { ToasDeleteComponent } from './components/toas-delete/toas-delete.component';
import { ModalComponent } from './components/modal/modal.component';


export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [authGuard],
    component: LayoutComponent,
    children: [
      { path: 'app', loadChildren: () => import('./modules/time-glide.module').then(m => m.TimeGlideModule) }
    ]
  },
  { path: 'headerForm', component: TablaComponent },

  { path: 'modal', component: ModalDinamicComponent },
  {path: 'toas', component: ToasDeleteComponent},
  { path: 'tablaprueba', component: ModalComponent }

];



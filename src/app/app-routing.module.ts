import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderFormComponent } from './components/header-form/header-form.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ModalDinamicComponent } from './components/modal-dinamic/modal-dinamic.component';


export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'app', loadChildren: () => import('./modules/time-glide.module').then(m => m.TimeGlideModule) }
    ]
  },
  { path: 'headerForm', component: TablaComponent },

{ path: 'modal', component: ModalDinamicComponent  }


];



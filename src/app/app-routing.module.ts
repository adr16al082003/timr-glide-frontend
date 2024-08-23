import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';


export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'app', loadChildren: () => import('./modules/time-glide.module').then(m => m.TimeGlideModule) }
    ]
  }

];



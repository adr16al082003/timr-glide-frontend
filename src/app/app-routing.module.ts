import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const AppRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];



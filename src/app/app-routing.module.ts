import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SamboxComponent } from './components/sambox/sambox.component';
import { ModalComponent } from './components/modal/modal.component';
import { Component } from '@angular/core';
import { TablaComponent } from './components/tabla/tabla.component';

export const AppRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [],
  },
  {
    path: 'sambox',
    component: SamboxComponent,
  },
  {
    path: 'modal',
    component: ModalComponent,
  },
  {
    path: 'tabla',
    component: TablaComponent,
  }
];



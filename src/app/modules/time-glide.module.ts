import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LayoutRoutes } from './time-glide.routing';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TablaComponent } from "../components/tabla/tabla.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderFormComponent } from "../components/header-form/header-form.component";

@NgModule({
  declarations: [
    UsuariosComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(LayoutRoutes),
    TablaComponent,
    HeaderFormComponent
]
})
export class TimeGlideModule { }

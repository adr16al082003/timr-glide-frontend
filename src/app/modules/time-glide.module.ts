import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalDinamicComponent } from "../components/modal-dinamic/modal-dinamic.component";
import { TablaComponent } from "../components/tabla/tabla.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LayoutRoutes } from './time-glide.routing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderFormComponent } from "../components/header-form/header-form.component";
import { ToasDeleteComponent } from "../components/toas-delete/toas-delete.component";
import { CustomDropdownComponent } from "../components/custom-dropdown/custom-dropdown.component";


@NgModule({
  declarations: [
    UsuariosComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(LayoutRoutes),
    TablaComponent,
    ModalDinamicComponent,
    HeaderFormComponent,
    ToasDeleteComponent,
    CustomDropdownComponent
]
})
export class TimeGlideModule { }

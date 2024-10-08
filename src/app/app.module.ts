import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { TablaComponent } from "./components/tabla/tabla.component";
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
    

  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HeaderComponent,
    TablaComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

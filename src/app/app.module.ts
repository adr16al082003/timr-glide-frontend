import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HeaderComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

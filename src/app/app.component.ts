import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'pablo';
  saludar() {
    this.nombre = 'adrian';
    console.log(this.nombre);

  }
}

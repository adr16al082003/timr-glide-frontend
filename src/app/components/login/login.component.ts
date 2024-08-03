import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './User';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [LoginService],
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private _alertService = inject(AlertService);
  constructor(private loginService: LoginService) { }

  login: User = {
    user: '',
    pass: '',
    recordar: false
  }

  validateUser() {
    this.loginService.validateUser(this.login).subscribe({
      next: (user) => {
        console.log(user);
        this.sesion();
      },
      error: (error) => {
        console.log(error);
        this.fails("Usuario o Clave Invalida");
      }
    })
  }

  sesion(){
    this._alertService.sesion();
  }

  fails(text = ""){
    this._alertService.fails(text);
  }

  exito(text = ""){
    this._alertService.exito(text);
  }

  warning(text = ""){
    this._alertService.warning(text);
  }
}

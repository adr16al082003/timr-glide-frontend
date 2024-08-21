import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './User';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [LoginService],
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ;
  

  login: User = {
    user: '',
    pass: '',
    recordar: false
  }
  constructor(
    private loginService: LoginService, 
    private _alertService: AlertService,
    private router: Router){ }

    ngOnInit(): void {
      if (localStorage.getItem('recordar')) {
        let user = JSON.parse(localStorage.getItem('recordar') as string);
      
        this.login.user = user.user
        this.login.recordar = user.recordar
      
      }
    }

  validateUser() {
    this.loginService.validateUser(this.login).subscribe({
      next: (user:any) => {
        if( this.login.recordar){
          localStorage.setItem('recordar', JSON.stringify({
            user: this.login.user,
            recordar: this.login.recordar
          }));
        }else{
          localStorage.removeItem('recordar');
        }
        this._alertService.exito(`Bienvenido ${user[0].nombre}`);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log(error);
        this._alertService.fails("Usuario o Clave Invalida");
      }
    })
  }
}

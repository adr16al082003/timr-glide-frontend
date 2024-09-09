import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormLogin } from './User';

import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [AuthService],
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: FormLogin = {
    user: '',
    pass: '',
    recordar: false
  }
  constructor(
    private authService: AuthService, 
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
    this.authService.validateUser(this.login).subscribe({
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
        this.router.navigate(['/app']);
      },
      error: (error) => {
        console.log(error);
        this._alertService.fails("Usuario o Clave Invalida");
      }
    })
  }
}

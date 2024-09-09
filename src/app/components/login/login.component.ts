import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { LoginService } from 'src/app/services/login.service';
import { Login } from './User';

@Component({
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [AuthService],
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: Login = {
    user: '',
    pass: '',
    recordar: false
  }
  constructor(
    private loginService: LoginService,
    private _alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('recordar')) {
      let user = JSON.parse(localStorage.getItem('recordar') as string);

      this.login.user = user.user
      this.login.recordar = user.recordar

    }
  }

  validateUser() {
    this.loginService.validateUser(this.login).subscribe({
      next: (user: any) => {
        if (this.login.recordar) {
          localStorage.setItem('recordar', JSON.stringify({
            user: this.login.user,
            recordar: this.login.recordar
          }));
        } else {
          localStorage.removeItem('recordar');
        }
        this._alertService.exito(`Bienvenido ${user[0].nombre}`);

        //*seteamos la autenticación en el sessions storage y el usuario en la cookie
        this.loginService.setAuthenticated();
        this.loginService.setUser(user[0]);

        this.router.navigate(['/app']);
      },
      error: (error) => {
        console.log(error);
        this._alertService.fails("Usuario o Clave Invalida");
      }
    })
  }
}

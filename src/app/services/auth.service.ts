import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../environments/enviroment';
import { FormLogin } from '../components/login/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  Usuario: User = new User();

  constructor(private http: HttpClient) { }

  /**
   * consume el api para validar el usuario
   * @param user 
   * 
   * @returns 
   */
  validateUser(user:FormLogin) {
    return this.http.post(enviroment.host + '/api/validate-user', user);
  }


  

}

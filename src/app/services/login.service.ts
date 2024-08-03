import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../environments/enviroment';
import { User } from '../components/login/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateUser(user:User) {
    return this.http.post(enviroment.host + '/api/validate-user', user);
  }

  
}

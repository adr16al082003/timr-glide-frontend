import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../environments/enviroment';
import { Login } from '../components/login/User';
import { Usuario } from '../models/People.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  /**
   *usuario atenticado
   *
   * @private
   * @type {Usuario}
   * @memberof LoginService
   */
  private authenticated_user: Usuario = new Usuario();
  private is_authenticated: boolean = false;

  constructor(
    private router:Router,
    private http: HttpClient
  ) { }

  /**
   *Servicio que utliza el login para validar el usuario
   *
   * @param {Login} user
   * @return {*} 
   * @memberof LoginService
   */
  validateUser(user: Login): Observable<Usuario> {
    return this.http.post<Usuario>(enviroment.host + '/api/validate-user', user);
  }

  /**
   *Setea el user que se encuentra autenticado
   *
   * @param {Usuario} user
   * @memberof LoginService
   */
  public setUser(user: Usuario) {
    this.authenticated_user = user;
    this.createCookie('authenticated_user', JSON.stringify(user), 2);
  }
  /**
   *Obtiene un usuario
   *
   * @return {*}  {Usuario}
   * @memberof LoginService
   */
  getUser(): Usuario {
    return this.getCookie('authenticated_user') as Usuario
  }

  /**
   * 
   *setea la session en el session storage
   *
   * @memberof LoginService
   */
  public setAuthenticated() {
    this.is_authenticated = true;
    sessionStorage.setItem('authenticated', JSON.stringify(this.is_authenticated))
  }

  /**
   *Verifica si esta loqueado
   *
   * @return {*}  {boolean}
   * @memberof LoginService
   */
  public isLoggedIn(): boolean {
    return this.is_authenticated
  }

  logout(): void {
    this.is_authenticated = false;
    sessionStorage.setItem('authenticated', JSON.stringify(this.is_authenticated));

    this.deleteCookie('authenticated_user')
    window.location.href = window.location.href;
    this.router.navigateByUrl('/login')
  }

  /**
   *Crea una cookie
   *
   * @param {string} key llave o nombre de la cookie
   * @param {string} value valor a guardar
   * @param {number} hours tiempo de duracion
   * @memberof LoginService
   */
  createCookie(key: string, value: string, hours: number) {
    const expirationDate = new Date();

    // Calcula la fecha de expiración sumando las horas
    expirationDate.setTime(expirationDate.getTime() + (hours * 60 * 60 * 1000));

    // Formatea la fecha de expiración
    const expires = "; expires=" + expirationDate.toUTCString();

    document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value) + expires + '; path=/';
  }


  /**
   *Obtiene una cookie
   *
   * @param {string} name
   * @return {*}  {(Object | null)}
   * @memberof LoginService
   */
  getCookie(name: string): Object | null {
    const decodedKey = decodeURIComponent(name);
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());

    for (const cookie of cookies) {
      const [cookieKey, cookieValue] = cookie.split('=').map(cookiePart => cookiePart.trim());
      if (cookieKey === decodedKey) {
        return JSON.parse(decodeURIComponent(cookieValue));
      }
    }

    return null;
  }

  /**
   *Elimina una cookie
   *
   * @param {string} key llave o nombre de la cookie
   * @memberof LoginService
   */
  deleteCookie(key: string) {
    document.cookie = encodeURIComponent(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
}

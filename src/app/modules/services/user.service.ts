import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/environments/enviroment';
import { Usuario } from 'src/app/models/People.model';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(
        private http: HttpClient,
    ) { }

    createUser(user: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(enviroment.host + '/api/crear-user', user);
    }


    listUser(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(enviroment.host + '/api/obtener-usuario');
    }

    editUser(user: Usuario): Observable<Usuario> {
        return this.http.put<Usuario>(enviroment.host + '/api/update-user', user);
    }

}
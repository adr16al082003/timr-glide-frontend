import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/environments/enviroment';
import { Cliente } from 'src/app/models/cliente.model';

@Injectable({
    providedIn: 'root'
})

export class ClienteService {

    constructor(
        private http: HttpClient,
    ) { }

    /**
     * 
     * @param customer 
     * crear clientes
     * @returns 
     */
    createCustomer(customer: Cliente):Observable<Cliente[]>{
        return this.http.post<Cliente[]>(enviroment.host + '/api/crear-cliente' , customer)
    }

    /**
     * listar cliente
     */

    listCustomer():Observable<Cliente[]>{
        return this.http.get<Cliente[]>(enviroment.host + '/api/obtener-cli');
    }

    /**
     * 
     * editar cliente
     * @param customer 
     * @returns 
     */
    editCustomer(customer:Cliente):Observable<Cliente[]>{
        return this.http.put<Cliente[]>(enviroment.host + '/api/update-cliente', customer)
    }

    deleteCustomer(customer:Cliente):Observable<Cliente>{
        return this.http.delete<Cliente>(enviroment.host + '/api/delete-cliente/'+ customer.id)
    }
}
import { City } from "./ciudad.model";

export class Cliente extends City{
    id: number = 0;
    nombre: string = '';
    identificacion: string = '';
    identificacion_iso: 'V' | 'E' = 'V' ;
    telefonos: number[] = [];
    direccion: string[] = [];
    genero: 'H'| 'M' = 'H'  ;
}


import { City } from "./ciudad.model";

export class Reuniones extends City{
    id:number = 0;
    fecha:Date = new Date();
    nombre: string = '';
    descripcion: string = '';
}
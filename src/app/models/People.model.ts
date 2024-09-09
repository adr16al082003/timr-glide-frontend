/**
 * Model de usuario
 *
 * @export
 * @class Usuario
 * 
 */
export class Usuario {
	id: number= 0
	nombre: string = ''
	clave: string = ''
	cargo: string = ''
	id_rol: number = 0
	permissions: Access = new Access()
}

/**
 *Modelo de accesos 
 *
 * @export
 * @class Access
 */
export class Access {
	create: boolean = false
	update: boolean = false
	delete: boolean = false
}
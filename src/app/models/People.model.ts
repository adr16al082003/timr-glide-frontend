/**
 * Model de usuario
 *
 * @export
 * @class Usuario
 * 
 */
export class Usuario {
	id: number = 0
	nombre: string = ''
	usuario: string = ''
	clave: string = ''
	clave2: string = ''
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
	id: number = 0
	nombre: string = ''
	modules: Modules[] = [
		{
			id: 0 ,
			name: 'Usuario',
			view: false,
			create: false,
			update: false,
			delete: false
		},

		{
			id: 0 ,
			name: 'Clientes',
			view: false,
			create: false,
			update: false,
			delete: false
		},

		{
			id: 0 ,
			name: 'Reuniones',
			view: false,
			create: false,
			update: false,
			delete: false
		},

		{
			id: 0 ,
			name: 'Permisos',
			view: false,
			create: false,
			update: false,
			delete: false
		},

		{
			id: 0 ,
			name: 'Reporte',
			view: false,
			create: false,
			update: false,
			delete: false
		}

	];
}

export interface Modules {
	id: number,
	name: string,
	create: boolean,
	update: boolean,
	delete: boolean,
	view: boolean
}
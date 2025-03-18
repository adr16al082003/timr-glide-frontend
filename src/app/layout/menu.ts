export interface MenuItem {
  id: number;
  view: boolean;
  url: string;
  name: string;
  icon: string;
  create: boolean;
  update: boolean;
  delete: boolean
}


export const menuDashboard: MenuItem[] = [
  {
    id: 1,
    view: false,
    url: 'app/usuarios',
    name: 'Usuarios',
    icon: 'bx bx-user-circle',
    create: false,
    update: false,
    delete: false
  },
  {
    id: 2,
    view: false,
    url: 'app/clientes',
    name: 'Clientes',
    icon: 'bx bx-user-voice',
    create: false,
    update: false,
    delete: false
  },
  {
    id: 3,
    view: false,
    url: 'app/reuniones',
    name: 'Reuniones',
    icon: 'bx bx-group',
    create: false,
    update: false,
    delete: false
  },
  {
    id: 4,
    view: false,
    url: 'app/roles',
    name: 'Permisos',
    icon: 'bx bx-lock-alt',
    create: false,
    update: false,
    delete: false
  },
  {
    id: 5,
    view: false,
    url: '',
    name: 'Reportes',
    icon: 'bx bxs-report',
    create: false,
    update: false,
    delete: false
  }
]

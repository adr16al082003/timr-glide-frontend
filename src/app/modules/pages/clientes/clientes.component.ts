import { Component } from '@angular/core';
import { HeaderFormComponent } from 'src/app/components/header-form/header-form.component';
import { Cliente } from 'src/app/models/cliente.model';
import { Colum } from 'src/app/models/configForms.model';
import { AlertService } from 'src/app/services/alert.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  descartView: boolean = true;
  openModal: boolean = false;

  parroquia_iso: { id: number | string, name: string }[] = [
    { id: 1, name: 'Guatire' },
    { id: 2, name: 'Bolivar' },
  ]

  constructor(
    private alertService: AlertService,
    private customeService: ClienteService
  ) { }

  customer: Cliente = new Cliente();

  /**
   * funcion para agregar con el boton +
   */

  agregar(e: any) {
    this.customer = new Cliente();
    this.openModal = true;
    this.descartView = true;
  }

  /**
   * esto son los campos y el cuerpo de la tabla dinamica
   */
  labelTablaUser: Colum[] = [
    { label: 'Id', key: 'id', visible: true },
    { label: 'Nombre', key: 'nombre', visible: true },
    { label: 'Identificacion', key: 'identificacion', visible: true },
    { label: 'Nacionalidad', key: 'identificacion_iso', visible: true },
    { label: 'Telefono', key: 'telefonos', visible: true },
    { label: 'Direccion', key: 'direcciones', visible: true },
    { label: 'Genero', key: 'genero', visible: true },
    { label: 'Parroquia', key: 'id_parroquia', visible: true },
  ]

  dataTabla: Cliente[] = []

  /**
   * metodo para el boton descartar
   */

  clean() {
    this.customer = new Cliente();
  }

  /**
   * 
   * metodo para validar los campos
   * @returns 
   */
  validarCliente(): boolean {
    if (this.customer.nombre.trim() === '') {
      this.alertService.fails('El nombre es Obligatorio');
      return true;
    } if (this.customer.identificacion.trim() === '') {
      this.alertService.fails('La identificacion es obligatoria');
      return true;
    } if (this.customer.identificacion_iso.trim() === '') {
      this.alertService.fails('La nacionalidad es obligatoria');
      return true;
    } if (this.customer.genero.trim() === '') {
      this.alertService.fails('El genero es obligatorio');
      return true;
    }
    return false

  }

  createCustomer() {
    if (this.validarCliente()) {
      return;
      }

    this.customeService.createCustomer(this.customer).subscribe({
      next: (data) => {
        console.log(data);
        this.clean();
        this.dataTabla.push(data[0]);
        this.openModal = false;
        this.alertService.exito('Cliente creado con exito');
      },
      error: (error) => {
        console.log(error);
        this.alertService.fails('Error al crear el cliente');
      }
    });
  }

  /**
   * metodo para listar clientes
   */
  ngOnInit() {
    this.listCustomer();
  }

  listCustomer() {
    this.customeService.listCustomer().subscribe({
      next: (data) => {
        this.dataTabla = data;
      },
      error: (error) => {
      }
    });
  }


  /**
   * metodo para abrir el modal de editar
   */
  asignarForm(customer: Cliente) {
    this.openModal = true;
    this.customer = customer;
    this.descartView = false;
  }

  /**
   * metodo para editar 
   */
  editCustomer() {
    this.customeService.editCustomer(this.customer).subscribe({
      next: (data) => {
        console.log(data);
        const customerIndex = this.dataTabla.findIndex(Cliente => Cliente.id === this.customer.id);
        this.dataTabla[customerIndex] = data[0];
        this.openModal = false;
        this.alertService.exito('Cliente editado con exito');
      },
      error: (error) => {
        console.log(error);
        this.alertService.fails('Error al editar el cliente');
      }
    });
  }

  /**
   * metodo para crear o editar 
   */
  assignCustomer() {
    if (this.customer.id != 0) {
      this.editCustomer();
    } else {
      this.createCustomer();
    }
  }

  /**
   * metodo para eliminar
   */
  deleteCustomer(customer: Cliente) {
    this.alertService.delete('Seguro que deseas eliminar', 'esta accion es irreversible').then((result) => {
      if (result.isConfirmed) {
        this.customeService.deleteCustomer(customer).subscribe({
          next: (data) => {
            const customerIndex = this.dataTabla.findIndex(Cliente => Cliente.id === customer.id);
            this.dataTabla.splice(customerIndex, 1);
            this.alertService.exito('Cliente eliminado con exito');
          },
          error: (error) => {
            console.log(error);
            this.alertService.fails('Error al eliminar el cliente');
          }
        });
      }
    });
  }


}


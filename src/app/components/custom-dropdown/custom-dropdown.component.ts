import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true
    }
  ],
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent {
  /**
   *nombre del item seleccionado del select
   *
   * @type {(string | null)}
   * @memberof CustomDropdownComponent
   */
  labelValue: string | null = null;

  @Input() disabled: boolean = true;

  /**
   *Nombre del dropdown
   *
   * @type {string}
   * @memberof CustomDropdownComponent
   */
  @Input() label: string = 'dropdown';

  /**
   *ARREGLO DE ITEMS pra el select
   *
   * @type {({ id: number | string, name: string }[])}
   * @memberof CustomDropdownComponent
   */
  @Input() data: { id: number | string, name: string }[] = [];

  /**
   *Valor
   *
   * @type {(number | string)}
   * @memberof CustomDropdownComponent
   */
  value: number | string = 0;
  
  // ControlValueAccessor methods
  onChange: any = () => { };
  onTouched: any = () => { };

  /**
   * Setea el valor seleccionado en el dropdown y notifica
   * al padre de este cambio.
   * @param value Valor seleccionado.
   */
  setValueSelect(value: any) {
    this.value = value.id
    this.labelValue = value.name
    this.onChange(this.value); // Informar el cambio de valor al padre
    this.onTouched(); // Marcar como "tocado"
  }

  /**
   * Establece el valor seleccionado en el dropdown.
   * Si el valor provisto coincide con el ID de alguno de los items de la lista,
   * actualiza el labelValue con el nombre del item seleccionado.
   * @param value Valor a establecer.
   */
  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this.value = value;
      const selectedItem = this.data.find(item => item.id === value);
      if (selectedItem) {
        this.labelValue = selectedItem.name; // Actualiza el label según el valor seleccionado
        value = selectedItem.id;
      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}

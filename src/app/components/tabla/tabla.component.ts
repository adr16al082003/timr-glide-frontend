import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamboxComponent } from "../sambox/sambox.component";


@Component({
  imports: [CommonModule, SamboxComponent],
  standalone: true,
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

}

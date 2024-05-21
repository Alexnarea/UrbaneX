import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzCardModule],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  @Input() parentMessageInput!: string;
  parentMessageViewChild: string = '';
  @Output() childMessageEventOutput = new EventEmitter<string>();

  sendMessage() {
    this.childMessageEventOutput.emit('Jefe ya revisamos el inventario y ya no tenemos camisetas!!.');
  }
}

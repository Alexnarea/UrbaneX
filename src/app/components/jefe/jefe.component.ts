import { Component, AfterContentInit, ContentChild, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { EmpleadoComponent } from '../empleado/empleado.component';

@Component({
  selector: 'app-jefe',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzCardModule, EmpleadoComponent],
  templateUrl: './jefe.component.html',
  styleUrls: ['./jefe.component.css']
})
export class JefeComponent implements AfterViewInit, AfterContentInit {
  instruccionDelGerente = 'Mostrar la nueva colección de verano.';
  mensajeDelEmpleado = '';

  @ViewChild(EmpleadoComponent) empleadoComponent!: EmpleadoComponent;
  @ContentChild('projectedContent', { static: true }) projectedContent!: ElementRef;

  recibirConfirmacion(confirmacion: string) {
    this.mensajeDelEmpleado = confirmacion;
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.empleadoComponent.parentMessageViewChild = 'Revisar el inventario y reportar cualquier falta de stock inmediatamente.';
    });
  }

  ngAfterContentInit() {
    if (this.projectedContent) {
      console.log('El contenido proyectado es:', this.projectedContent.nativeElement.textContent);
    }
  }
}

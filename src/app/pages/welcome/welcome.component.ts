import { Component, OnInit } from '@angular/core';
import { EmpleadoComponent } from '../../components/empleado/empleado.component';
import { JefeComponent } from '../../components/jefe/jefe.component';
@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    JefeComponent,
    EmpleadoComponent
  ],
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

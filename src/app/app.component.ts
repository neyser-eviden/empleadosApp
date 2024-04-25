import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Empleados';


  empleados: Empleado[] = [
    new Empleado("Juan", "Perez", "Gerente", 4500),
    new Empleado("Jose", "Garcia", "Jefe", 4000),
    new Empleado("Maria", "Lopez", "Asistente", 2500),
    new Empleado("Neyser", "Huaman", "Asistente", 3500)
  ];

  valNombre: string = "";
  valApellido: string = "";
  valCargo: string = "";
  valSalario: number = 0;

  agregarEmpleado(){
    let empleado = new Empleado(this.valNombre, this.valApellido, this.valCargo, this.valSalario);
    this.empleados.push(empleado);

    this.valNombre="";
    this.valApellido="";
    this.valCargo="";
    this.valSalario=0;
  }
  
  

}

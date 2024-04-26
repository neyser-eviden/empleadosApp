import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class Servicio2EmpleadosService {

  constructor() { }

  empleados: Empleado[] = [
    new Empleado("Juan", "Perez", "Gerente", 4500),
    new Empleado("Jose", "Garcia", "Jefe", 4000)
  ];

  agregarEmpleadoServicio(empleado: Empleado){
    this.empleados.push(empleado);
  }

}

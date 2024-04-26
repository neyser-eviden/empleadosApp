import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class Servicio2EmpleadosService {

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) {

   }

  empleados: Empleado[] = [
    new Empleado("Juan", "Perez", "Gerente", 4500),
    new Empleado("Jose", "Garcia", "Jefe", 4000)
  ];

  agregarEmpleadoServicio(empleado: Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar"+"\n"+
      "Nombre: "+ empleado.nombre + "\n"+
      "Apellido: " + empleado.apellido + "\n"+
      "Cargo: " + empleado.cargo + "\n"+
      "Salario: " + empleado.salario
    )
    this.empleados.push(empleado);
  }

  actualizarEmpleadoServicio(idEmpleado:number, empleado: Empleado){

    this.empleados[idEmpleado] = empleado;
  }

  eliminarEmpleadoServicio(idEmpleado:number){
    this.empleados.splice(idEmpleado,1);
  }

  buscarEmpleado(idEmpleado: number): Empleado{
    let empleado:Empleado = this.empleados[idEmpleado];
    return empleado;
  }

}

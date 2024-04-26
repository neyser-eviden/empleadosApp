import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';
import { Servicio2EmpleadosService } from '../servicio2-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private miServicio2:Servicio2EmpleadosService){
    //this.empleados=this.miServicio2.empleados;
  }
  ngOnInit(): void {
    this.empleados=this.miServicio2.empleados;
  }

  empleados: Empleado[] = [];

  valNombre: string = "";
  valApellido: string = "";
  valCargo: string = "";
  valSalario: number = 0;

  agregarEmpleado(){
    let empleado = new Empleado(this.valNombre, this.valApellido, this.valCargo, this.valSalario);

    //this.miServicio.muestraMensaje("Nombre: "+empleado.nombre);
    this.miServicio2.agregarEmpleadoServicio(empleado);
    
    this.valNombre="";
    this.valApellido="";
    this.valCargo="";
    this.valSalario=0;
  }
  

}

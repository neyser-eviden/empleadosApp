import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { Servicio2EmpleadosService } from './servicio2-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
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

    this.miServicio.muestraMensaje("Nombre: "+empleado.nombre);
    this.miServicio2.agregarEmpleadoServicio(empleado);
    
    

    this.valNombre="";
    this.valApellido="";
    this.valCargo="";
    this.valSalario=0;
  }
  
  

}

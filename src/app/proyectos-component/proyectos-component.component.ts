import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Servicio2EmpleadosService } from '../servicio2-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private miServicio2:Servicio2EmpleadosService){
  }

  ngOnInit(): void {
    this.empleados=this.miServicio2.empleados;
  }

  volverHome(){
    this.router.navigate(['']);
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

    this.router.navigate(['']);
  }

}

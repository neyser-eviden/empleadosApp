import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Servicio2EmpleadosService } from '../servicio2-empleados.service';

@Component({
  selector: 'app-actualiza-empleado',
  templateUrl: './actualiza-empleado.component.html',
  styleUrl: './actualiza-empleado.component.css'
})
export class ActualizaEmpleadoComponent implements OnInit{

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private miServicio2:Servicio2EmpleadosService){

  }

  empleados: Empleado[] = [];

  valNombre: string = "";
  valApellido: string = "";
  valCargo: string = "";
  valSalario: number = 0;
  valId: number;

  accion: number;


  ngOnInit(): void {

    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados=this.miServicio2.empleados;
    this.valId = this.route.snapshot.params['id'];

    let empleado:Empleado = this.miServicio2.buscarEmpleado(this.valId); 
    this.valNombre = empleado.nombre;
    this.valApellido = empleado.apellido;
    this.valCargo = empleado.cargo;
    this.valSalario = empleado.salario;

  }


  

  actualizarEmpleado(){


    if (this.accion === 1) {
      // Actualización
      let empleado = new Empleado(this.valNombre, this.valApellido, this.valCargo, this.valSalario);
      this.miServicio2.actualizarEmpleadoServicio(this.valId, empleado);
    }
    else if(this.accion === 2){
      // Eliminación
    this.miServicio2.eliminarEmpleadoServicio(this.valId);
    }
    
    //Redirección
    this.router.navigate(['']);
  }

  volverHome(){
    this.router.navigate(['']);
  }

}

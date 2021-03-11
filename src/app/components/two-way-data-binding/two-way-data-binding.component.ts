import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  //DEFINIR VARIABLES
  
  mostrarMensajeError:boolean = true;
  nombreVal:string;


  constructor() { 
    console.log('CONSTRUCTOR')
  }

  ngOnInit(): void {
  console.log('NG ON INIT');
  this.logNombre('pon el numero de teléfono')
  }

  logNombre(nombre:string){
    console.log('NOMBRE', nombre);
    this.nombreVal = nombre;
  }

  checkearTelf(){
    console.log('CHECKEAR TELF',this.nombreVal);
    if(this.nombreVal.length === 9){
      this.mostrarMensajeError = false
    }else{
      this.mostrarMensajeError = true
    }
  }
}

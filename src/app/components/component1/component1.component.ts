import { Component, OnInit } from '@angular/core';

export interface Persona{
  nombre:string
  apellido:string
  edad?:number
}
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})


export class Component1Component implements OnInit {
  
  // null, undefined, 0, '', FALSE
  
  alumnos:Persona[] = [
    {
      nombre:'Marc',
      apellido:'Estalella',
      edad:26
    },
    {
      nombre:'Zdravko',
      apellido:'Marinov',
      edad:21
    },
    {
      nombre:'Julia',
      apellido:'Abad'
    },
  ]

  
  constructor() { 
    console.log('implementamos el constructor');
  }

  ngOnInit(): void {
    console.log('NOMBRES',this.alumnos)
  }
  
  recibido(ev){
    console.log('EVENTO RECIBIDO DEL HIJO', ev);
  }

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() alumno; //es [alumno] de component1component.html - el padre 
  @Output() mensaje = new EventEmitter<string>(); //es (mensaje) de component1component.html


  constructor() { }

  ngOnInit(): void {
  }

  click(){
    console.log('CLICK'); //si clicas haces la función
    this.mensaje.emit(this.alumno.nombre)
  }

}

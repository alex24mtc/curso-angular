import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root', //es como un div 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  nombre= 'alex marí';

  constructor(private db: AngularFirestore) {
    const prueba = db.collection('prueba').valueChanges();
    prueba.subscribe(console.log);
  }
/*
  constructor(private router: Router){
     console.log('constructor');
  }

  
  navegarPagina(pagina:number){
    const url = `/page${pagina}`
    this.router.navigateByUrl(url)

  }
 
*/
}





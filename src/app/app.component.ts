import { Component } from '@angular/core';
import { Calculo } from './Entidades/Calculo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ejercicio 01';

 calc = new Calculo();

  Limpiar(){
    this.calc.edad1= 0;
    this.calc.edad2= 0;
    this.calc.suma= 0;
    this.calc.promedio= 0;

  }
}

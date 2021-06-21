import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'alejandro';
  nombreUpper: string = 'ALEJANDRO';
  nombreCompleto: string = 'ALejanDro';


  fecha : Date = new Date(); //el día de hoy
}

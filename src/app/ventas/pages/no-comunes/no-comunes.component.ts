import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  nombre : string = 'Alejandro'
  genero: string = 'masculino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural
  clientes: string[] =['Maria','Pedro','Fernando','Eduardo','Pepe'];
  clientesMapa ={
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  //Slice Pipe
  cambiarCliente(){
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }
  borrarCliente(){
    this.clientes.pop();
    }

    //KeyValue Pipe
    persona = {
      nombre: 'Alejandro',
      edad: 35,
      direccion: 'Ottawa, Canada'
    }

    //JsonPipe
    heroes = [
      {
        nombre: 'Superman',
        vuelve: true
      },
      {
        nombre: 'Robin',
        vuelve: false
      },
      {
        nombre: 'Aquaman',
        vuelve: false
      }
    ]

    //Async Pipe

    miObservable = interval(2000); //0,1,2,3,4,5,6....

    valorPromesa = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve('Tenemos data de promesa')
      }, 3500)
    });
}



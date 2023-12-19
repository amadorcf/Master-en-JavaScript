import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  /*template: `
    <h2>Componente de Videojuegos</h2>
    <ul>
      <li>GTA</li>
      <li>Tekken 3</li>
      <li>FIFA 23</li>
    </ul>
  `,*/
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css'],
})
export class VideojuegoComponent implements OnInit, DoCheck {
  public title: string;
  public list: string;

  constructor() {
    this.title = 'Componente de Videojuegos';
    this.list = 'Listado de juegos mas populares de PS4';
    console.log('Componente Videojuegos cargado');
  }


  // HOOKS son metodos con ciertas funciones

  // Se ejecuta al iniciar la app
  ngOnInit() {
    console.log('OnInit ejecutado!');
  }

  // Se ejecuta al hacer algun cambio en Angular
  ngDoCheck() {
    console.log('DoCheck ejecutado!');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  cambiarTitulo() {
    this.title = 'Ahora el tiulo es este';
  }
}

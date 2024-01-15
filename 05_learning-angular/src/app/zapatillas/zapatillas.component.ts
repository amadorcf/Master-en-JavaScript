import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
})
export class ZapatillasComponent implements OnInit{
    public titulo:string = "Componente de categoria: Zapatillas";
    public zapatillas: Array<Zapatilla>;

    constructor(){
      this.zapatillas = [
        new Zapatilla('Adidas Classic', 'Adidas', 'Blanco', 69.99, true),
        new Zapatilla('Adidas Ultra Boost', 'Adidas', 'Negro', 120.00, true),
        new Zapatilla('Nike Air', 'Nike', 'Blanco', 89.99, true),
        new Zapatilla('Puma Clyde Court', 'Puma', 'Rojo', 99.99, false),
        new Zapatilla('Reebok Classic Leather', 'Reebok', 'Blanco', 79.95, true),

        //aqui podiamos crear mas zapatillas usando el patron de la linea anterior

      ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
    }


}

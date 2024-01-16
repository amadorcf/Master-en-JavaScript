import { Zapatilla } from './../models/zapatilla';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
})
export class ZapatillasComponent implements OnInit{
    public titulo:string = "Componente de categoria: Zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public mi_marca: string;

    constructor(){
      this.zapatillas = [
        new Zapatilla('Adidas Classic', 'Adidas', 'Blanco', 69.99, true),
        new Zapatilla('Adidas Ultra Boost', 'Adidas', 'Negro', 120.00, true),
        new Zapatilla('Nike Air', 'Nike', 'Blanco', 89.99, true),
        new Zapatilla('Puma Clyde Court', 'Puma', 'Rojo', 99.99, false),
        new Zapatilla('Reebok Classic Leather', 'Reebok', 'Blanco', 79.95, true),

        //aqui podiamos crear mas zapatillas usando el patron de la linea anterior

      ];

      this.marcas = new Array();
      this.mi_marca = "";
    }

    ngOnInit(){
        console.log(this.zapatillas);

        this.getMarcas();
    }

    getMarcas(){
      this.zapatillas.forEach(((zapatilla, index) => {
        if(this.marcas.indexOf(zapatilla.marca) < 0){
          this.marcas.push(zapatilla.marca);
          //console.log(index);
        }
      }));

      console.log(this.marcas);
    }

    getMiMarca(){
      alert(this.mi_marca);
    }

    addMarca(){
      this.marcas.push(this.mi_marca);
    }

    deleteMarca(index: number){
      //delete this.marcas[index];
      this.marcas.splice(index, 1);
    }


    // Evento focus: ocurre cuando un elemento se enfoca. El evento onfocus se usa con mayor frecuencia con  <input>, <select> y <a>
    // Evento blur: se usa para quitar el foco de un elemento.
    onBlur(){
      console.log("Hemos salido del input")
    }

    // Evento keyup.enter
    onKeyUp(){
      console.log("Se ha pulsado la tecla ENTER")
      alert("La marca es:  " + this.mi_marca)
    }

}

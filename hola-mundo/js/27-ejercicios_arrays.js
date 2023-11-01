'use strict'

/*
1. Pedir 6 numeros al usuario y meterlos en un array
2. Mostrar el array en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene un array
6. Busqueda de un numero introducido por el usuario y nos diga si lo encuentra y su indice
*/

function showArray(element, customText = ""){
    document.write("<h1>Contenido del array "+ customText +"</h1>")
    document.write(element+"</br>");

    document.write("<ul>")
    element.forEach( (ele, index)=>{ //UTILIZANDO UNA FUNCION FLECHA (ANONIMA)
        document.write("<li>Numero "+ (index+1) + ": " + "<strong>" + ele +"</strong></li>")
    });
    document.write("</ul>")
}
var numbers = [];

/***  Apartado 1  ***/
for(var i=0; i<=5; i++){
    //var num = parseInt(prompt((numbers.length+1) + " - Introduzca un numero: ", 0));
    //numbers.push(num);
    numbers[i] = parseInt(prompt((numbers.length+1) + " - Introduzca un numero: ", 0));
}

console.log(numbers);

    /* OTRA FORMA DE HACERLO
    var cont = 0;
    while(cont != 6){
        var num = parseInt(prompt((cont+1) + " - Introduzca un numero: ", 0));
        numbers.push(num);
        cont++;
    }
    */


/***  Apartado 2  ***/
showArray(numbers);

/***  Apartado 3  ***/
var numbers_sorted = JSON.parse(JSON.stringify(numbers));
numbers_sorted.sort(function(a,b){return a-b}); //Esto es una funcion CALLBACK. return b-a --> para orden descendente
console.log(numbers);
showArray(numbers_sorted, "ordenado");

/***  Apartado 4  ***/
var numbers_reversed = JSON.parse(JSON.stringify(numbers));
numbers_reversed.reverse();
console.log(numbers);
showArray(numbers_reversed, "invertido");

/***  Apartado 5  ***/
document.write("<h2>El array tiene "+ numbers.length +" elementos.</h2></br>");

/***  Apartado 6  ***/
var num_toSearch = parseInt(prompt("Buscar el numero: ", 0));

var pos = numbers_reversed.findIndex( num => num == num_toSearch);

document.write("<hr>");
if(pos && pos != -1){
    console.log(num_toSearch);
    console.log(pos);
    document.write("<h1> ENCONTRADO! </h1>");
    document.write("<h2>El numero "+ num_toSearch +" esta en la posicion "+ pos +"</h2>");
}else{
    document.write("<h1>, "+ num_toSearch + "NO encontrado! </h1></br>");
}
document.write("</hr>");

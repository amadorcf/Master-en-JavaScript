'use strict'

// Utilizando un bucle, mostrar suma y media de numeros introducidos, hasta introducir un numero negativo



var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce un numero"));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero => 0){
        suma = suma + numero;
       
        contador++;
    }

    console.log(suma);
    console.log(contador);

}while(numero >= 0)

var media = suma / contador;
alert("La suma de los numeros introducidos es: "+ suma + "\nLa media de los numeros introducidoes es: "+ media);
'use strict'

// Pedir 2 numeros y devolver el mayor de ellos
// BONUS: Si los numeros no son un numero o son menores que 0, nos lo vuelva a pedir


var num1 = prompt("numero 1?");
while(num1 < 0 || isNaN(num1)){
    num1 = prompt("El numero no es correcto: numero 1?");
}

var num2 = prompt("numero 2?");
while(num2 < 0 || isNaN(num2)){
    num2 = prompt("El numero no es correcto: numero 2?");
}

if(num1 == num2){
    alert("Los numeros son IGUALES");
}else if( num1 > num2){
    alert("num1: "+ num1 + " \nes mayor que\n " + "num2: "+ num2);
}else if ( num2 > num1){
    alert("num2: "+ num2 + " \nes mayor que\n " + "num1: "+ num1);
}else{
   alert("Introduce numeros correctos")
}


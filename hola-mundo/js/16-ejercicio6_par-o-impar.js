'use strict'

/*
Mostrar todos los numeros divisibles de un numero introducido por el usuario
*/

var num1 = parseInt(prompt("numero 1?",0));

document.write("<h1>PAR o IMPAR???</h1>")

var even = num1 % 2;
if(even == 0){
    document.write(num1+", es un numero <strong>par</strong>");
}else{
    document.write(num1+", es un numero <strong>impar</strong>");
}

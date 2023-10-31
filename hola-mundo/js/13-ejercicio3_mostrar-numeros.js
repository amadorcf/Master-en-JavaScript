'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt("numero 1?",0));
var num2 = parseInt(prompt("numero 2?",0));

var count = num1;

document.write("<h1>De " + num1 + " a "+ num2 + " estan estos numeros:</h1>")
for(var i= num1; i <= num2; i++){
    //console.log(i)
    document.write(i+"<br/>");
}
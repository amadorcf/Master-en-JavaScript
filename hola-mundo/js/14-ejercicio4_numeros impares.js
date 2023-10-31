'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt("numero 1?",0));
var num2 = parseInt(prompt("numero 2?",0));

document.write("<h1>Los numeros impares entre " + num1 + " y "+ num2 + " son:</h1>")
for(var i= num1; i <= num2; i++){
    //console.log(i)
    var odd = i % 2;
    if(odd == 1){document.write(i+"<br/>");}
}
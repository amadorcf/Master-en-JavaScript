'use strict'

/*
Mostrar todos los numeros divisibles de un numero introducido por el usuario
*/

var num1 = parseInt(prompt("numero 1?",0));

document.write("<h1>Tabla de multiplicar del numero: "+num1 + "</h1>")

for(var i= 1; i <= 10; i++){
    //console.log(i)
    var result = num1 * i;
    document.write(num1 +" * " + i + " = " + result +"<br/>");
}

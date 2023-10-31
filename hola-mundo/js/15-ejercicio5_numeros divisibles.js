'use strict'

/*
Mostrar todos los numeros divisibles de un numero introducido por el usuario
*/

var num1 = parseInt(prompt("numero 1?",0));

for(var i= 1; i <= num1; i++){
    //console.log(i)
    var div = num1 % i;
    if(div == 0){document.write(i+", es un numero divisible<br/>");}
}
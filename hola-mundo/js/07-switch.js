'use strict'

// Usos SWITCH


var edad = prompt("¿edad?");
var imprime = "";

switch(edad){
    case  12:
        imprime = "menor";
    break;
    case  75:
        imprime = "anciano";
    break;
    default:
        imprime = "mayor";
    break;
}

console.log(imprime)

var my_result = confirm("Are you sure?")
console.log(my_result)
'use strict'

// Usos LET y VAR

// Prueba con VAR
var num = 40;
console.log(num);

if(true){
    var num = 50;
    console.log(num);
}

console.log(num);

// Prueba con LET: a diferencia de VAR, solo se mostraria el resultado a nivel de bloque y no a nivel global
var texto = "tonto";
console.log(texto);

if(true){
    let texto = "el que lo lea";
    console.log(texto);
}

console.log(texto);


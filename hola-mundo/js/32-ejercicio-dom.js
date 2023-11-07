'use strict'

window.addEventListener('load', function(){
    console.log("DOM cargado");

    var form = document.querySelector("#form");
    var box_dashed = document.querySelector(".dashed")
    box_dashed.style.display = "none";

    form.addEventListener('submit', f=>{
        console.log("Evento submit");

        var name = document.querySelector("#field_name").value;
        var surname = document.querySelector("#field_surname").value;
        var age = parseInt(document.querySelector("#field_age").value);
    
        if(name.trim() == null || name.trim().length == 0){
            alert("Not valid name");
            form.reset();
            return false;
        }

        if(surname.trim() == null || surname.trim().length == 0){
            alert("Not valid surname");
            form.reset();
            return false;
        }

        if(age == null || age <= 0 || isNaN(age)){
            alert("Not valid age");
            form.reset();
            return false;
        }


        box_dashed.style.display = "inline";

        console.log(
            name,
            surname,
            age
        );

        var titles = ["name", "surname", "age"];
        var datos = [name, surname, age];

        /*
        for(var d in datos){
            var parrafo = document.createElement("p");
            parrafo.append(titles[d],": ",datos[d]);

            box_dashed.append(parrafo);
        }*/

        var datos2 = { nombre: name, apellidos: surname, edad: age,};

        for(var [k,v] of Object.entries(datos2)){
            var parrafo = document.createElement("p");
            parrafo.append(`${k}: ${v}`);

            box_dashed.append(parrafo);
        }

 

    });


});
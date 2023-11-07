'use strict'

window.addEventListener('load', l =>{ //CON ESTE METODO EVITAMOS TENER QUE PONER EL SCRIPT FUERA DEL HEAD, QUE ES LO RECOMENDABLE

    var addButton = document.querySelector("#addButton")
    addButton.style.background = "green";
    addButton.style.color = "white";

    var deleteButton = document.querySelector("#deleteButton")
    deleteButton.style.background = "red";
    deleteButton.style.color = "white";

    var form = document.querySelector("#form-movies");

    form.addEventListener('submit', function(){
        console.log("add-submit");
        var title = document.querySelector('#addMovie').value;
        if(title.length >= 1){
            localStorage.setItem(title, title);
        }
    });

    form.addEventListener('submit', function(){
        console.log("delete-submit");
        var title = document.querySelector('#deleteMovie').value;
        if(title.length >= 1){
            localStorage.removeItem(title);
        }
    });

    var ul = document.querySelector('#movies-list');
    for(var i in localStorage){
        console.log(localStorage[i]);

        if(typeof localStorage[i] == 'string'){        
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }

    }
    

})
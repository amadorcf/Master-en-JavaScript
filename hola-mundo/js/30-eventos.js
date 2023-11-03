'use strict'

// EVENTOS 

// Eventos de raton

window.addEventListener('load', l =>{ //CON ESTE METODO EVITAMOS TENER QUE PONER EL SCRIPT FUERA DEL HEAD, QUE ES LO RECOMENDABLE

    var button = document.querySelector("#button")

    function changeColour(){
        console.log("You push me")
    
        var bg = button.style.background;
    
        if(bg == "green"){
            button.style.background = "red";
            
        }else{
            button.style.background = "green";
        }
    
    
        button.style.padding = "10px";
        button.style.border = "1px solid #ccc";
    
        return true;
    }
    
    function changeColourOrange(){
        console.log("You push orange")
    
        var bg = button.style.background;
    
        if(bg == "orange"){
            button.style.background = "red";
            
        }else{
            button.style.background = "orange";
        }
    
    
        button.style.padding = "10px";
        button.style.border = "1px solid #ccc";
        
        return true;
    }
    
    
    // Este es el evento CLICK  en JS
    button.addEventListener('click', click => {changeColour();});
    
    // Este es el evento CLICK en JS
    button.addEventListener('mouseover', click => {changeColourOrange();});
    
    // Otro evento del estilo: "mouseout"
    
    //Focus
    var input = document.querySelector("#box_name");
    input.addEventListener('focus', f => {console.log("You are in the input section")})
    
    //Blur
    var input = document.querySelector("#box_name");
    input.addEventListener('blur', f => {console.log("You are out from the input section")})
    
    //Keydown
    var input = document.querySelector("#box_name");
    input.addEventListener('keydown', event => {console.log("You are pushing the key: ", String.fromCharCode(event.keyCode))})
    
    //Keypress
    
    //Keyup

    // TIMERS

    function parpadea(){
        var time = setInterval(f =>{     // setTimeout --> intervalo finito

            console.log("Set internal execute");
    
            var head = document.querySelector("h1");
    
            if(head.style.fontSize =="50px"){
                head.style.fontSize ="30px";
            }else{
                head.style.fontSize ="50px";
            }
    
        }, 3000);

        return time;
    }

    var time = parpadea();
    var stop = document.querySelector("#stop");

    stop.addEventListener('click', click => {
        alert("Has parado el parpadeo del titulo");
        clearInterval(time);
        console.log("Stop");
    });

    run.addEventListener('click', click => {
        alert("Running");
        parpadea();
        console.log("Run");
    });
})




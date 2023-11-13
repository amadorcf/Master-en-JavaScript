$(document).ready(function(){
    console.log("jQuery y la web cargados ... ");

    // MouseOver y mouseOut
    var caja = $("#caja");

    /*
    caja.mouseover(function(){
        $(this).css("background", "cyan");
    });

    var caja = $("#caja");
    caja.mouseout(function(){
        $(this).css("background", "orange");
    });
    */

    // Hover
    function cambiaRojo(){
        $(this).css("background", "red");
    }

    function cambiaNaranja(){
        $(this).css("background", "orange");
    }

    caja.hover(cambiaRojo, cambiaNaranja);


    // Click y DobleClick
    caja.click(function(){
        $("p").css("font-size","30px");
    });

    caja.dblclick(function(){
        $("p").css("font-size","20px");
    });


    // Focus y Blur
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("font-weight","bold")
            .css("color","grey");
    });

    nombre.blur(function(){
        $(this).css("color","yellow");

        datos.text($(this).val()).show();
        datos.css("border", "4px dashed grey");
    });


    // mouseDown y mouseUp
    datos.mousedown(function(){
        $(this).css("border-color","yellow");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });

    // Mousemove
    $(document).on("mousemove", function(event){
        
        var posX = event.clientX;
        var posY = event.clientY;
        console.log("X: "+ posX +"- Y: " + posY);
        $('body').css("cursor", "none");
        
        var sigueme =  $("#sigueme");
        sigueme.css("left",event.clientX);
        sigueme.css("top",event.clientY);
    });



});
$(document).ready(function(){
    console.log("Estamos listos!!!");


    // Selector de ID
    var red = $("#rojo");
    red.css("background","red").css("color","white");

    var yellow = $("#amarillo");
    yellow.css("background","yellow").css("color","black");

    var green = $("#verde");
    green.css("background","green").css("color","white");


    // Selector de CLASES
    var my_class = $(".zebra");
    my_class.css("padding", "5px");
    $('.zebra').click(function(){
        my_class.css("padding", "5px");

        var that = $(this);
        if(that.hasClass('zebra')){
            that.removeClass("zebra");
        }
    my_class.dblclick(function(){
        $(this).addClass("zebra");
    });
    });


    // Selectores por ETIQUETA
    var parrafos = $("p").css('cursor', 'pointer');
    
    parrafos.click(function(){
        $(this).addClass("big");
    });
    parrafos.dblclick(function(){
        $(this).removeClass("big");
    });


    // Selectores por atributo
    $('[title="google"]').css('color', 'navy').css('font-size','25px');
    $('[title="bing"]').css('color', 'red').css('font-size','55px');
    $('[title="yahoo"]').css('color', 'pink').css('font-size','95px');


    // Otros selectores
    //$('p, a').addClass('mar-sup');
    var search = $("#box").find('.zebra');
    console.log(search);
});


$(document).ready(function(){

    var box = $('#box');
    var mostrar = $("#mostrar");
    var ocultar = $("#ocultar");
    var todo = $('#todo');

    mostrar.hide();

    mostrar.click(function(){
        $(this).hide();

        //box.show("fast");
        //box.fadeIn("slow");
        box.fadeTo("slow", 0.8);
        ocultar.show();
        box.css("background", "grey");
    });

    ocultar.click(function(){
        $(this).hide();
        
        mostrar.show();
        //box.fadeOut("fast");
        box.fadeTo("fast", 0.1);
        
    });

    todo.click(function(){
        box.toggle("fast"); // Tambien fadeToggle slideToggle
    });

    var animar = $('#animar');
    animar.click(function(){
        box.animate({
            marginLeft:'500px'}, 'slow');
        box.animate({
            fontSize:'30px'}, 'slow');
        box.slideUp("slow", function(){
            animar.text("Animacion finalizada");
        });
    });

});
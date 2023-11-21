$(document).ready(function(){

    console.log("jQuery y la web cargados ... ");

    $("h3").css("text-transform", "uppercase")

    // Mover elemento por la pagina
    $("#ele1").draggable();

    // Redimensionar
    $("#ele3").resizable();

    // Seleccionar elementos
    $(".lista-seleccionable").selectable();    
    $(".lista-sortable").sortable({
        update: function(event, ui){
            console.log("Lista cambiada!")
            console.log(event);
            console.log(ui);
        }
    });

    // Drop
    $("#ele2").droppable({
        drop: function(){
            console.log("Has soltado algo en este DIV");
        }
    });

    // Efectos
    $("#show").click(function(){
        $(".caja-efectos").toggle("slide", 1000);
    });

    // WIDGETS
    // Tooltip
    $(document).tooltip();

    	// Dialog
	$("#lanzar-popup").click(function(){
		$("#popup").dialog();
	})
	
	// Datepicker
	$("#calendario").datepicker();

	// Tabs
	$("#pestanas").tabs();

});
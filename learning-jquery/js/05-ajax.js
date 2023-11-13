$(document).ready(function(){

    console.log("jQuery y la web cargados ... ");


    // Metodo LOAD
    //$("#datos").load("https://reqres.in/");


    // Metodo GET
    
    $.get("https://reqres.in/api/users",{page:2}, function(response){
        console.log(response);
        response.data.forEach((ele,index) => {
            $("#datos").append("<p>"+ ele.first_name+ " " + ele.last_name + "</p>")
        });
    });
    

    // Metodo POST
    
    $("#form").submit(function(e){
        e.preventDefault();

        var usuario = {
            "name": $('input[name="name"]').val(),
            "web": $('input[name="web"]').val(),
        }
        console.log(usuario);

        /*
        $.post($(this).attr("action"), user, function(response){ 
            console.log(response);
        }).done(function(){
            alert("Usuario creado correctamente")
        }); 
        */

        // Metodo $.AJAX
        $.ajax({
        type: 'POST',
        url: $(this).attr("action"),
        data: usuario,
        beforeSend: function(){
            console.log("Enviando usuario...")
        },
        success: function(response){
            console.log(response);
            alert("Usuario creado correctamente");
        },
        error: function(){
            console.log("ERROR!")
        },
        timeout:2000,
        });
    });



});
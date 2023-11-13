$(document).ready(function(){
    console.log("jQuery y la web cargados ... ");

    reloadLinks();

    var addLink = $("#add_link")
    $('#add_button').removeAttr('disabled');    

    $('#add_button').click(function(){

        $('#menu').append('<li><a href="'+ addLink.val() + '"></a></li>');
        addLink.val("");
        // En lugar del metodo APPEND hay otros metodos como:
        // html() --> machacaria el resto de cosas ya hubiera
        // before() y after() --> para agregar antes o despues en el menu

        reloadLinks();
    });



});


function reloadLinks(){

    $('a').each(function(index){
        var that = $(this);
        console.log(that);

        that.attr('target', '_blank')

        var link = that.attr("href");
        console.log(link)
        that.text(link);
    });

}
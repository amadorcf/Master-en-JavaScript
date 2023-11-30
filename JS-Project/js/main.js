$(document).ready(function () {
  // Slider
  if(window.location.href.indexOf('index') > -1){
    $(function () {
      $(".bxslider").bxSlider({
        mode: "fade",
        captions: true,
        slideWidth: 1200,
        pager: true,
      });
    });
  }



  //Posts
  if(window.location.href.indexOf('index') > -1){

    const hoy = new Date(); // obtenemos la fecha actual
    // moment(hoy).format("YYYY-MM-DD hh:mm A"); // 2021-02-16 05:46 PM
    var today = moment(hoy).format("D MMMM YYYY"); // 16 Febrero 2021

    var posts = [
      {
        title: "Prueba 1",
        date: "Actualizado: " + today,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate id diam non efficitur. Sed suscipit nunc vel eros elementum, non feugiat erat lobortis. Phasellus sit ame pulvinar enim. Vivamus dapibus enim id urna maximus, ac tincidunt enim faucibus. Duis velmolestie magna. Duis in tortor malesuada mauris pharetra viverra. Vestibulum feugiat velit est,ac condimentum orci pharetra ac. Nunc mattis imperdiet dui non sollicitudin.",
      },
      {
        title: "Prueba 2",
        date: "Actualizado: " + today,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate id diam non efficitur. Sed suscipit nunc vel eros elementum, non feugiat erat lobortis. Phasellus sit ame pulvinar enim. Vivamus dapibus enim id urna maximus, ac tincidunt enim faucibus. Duis velmolestie magna. Duis in tortor malesuada mauris pharetra viverra. Vestibulum feugiat velit est,ac condimentum orci pharetra ac. Nunc mattis imperdiet dui non sollicitudin.",
      },
      {
        title: "Prueba 3",
        date: "Actualizado: " + today,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate id diam non efficitur. Sed suscipit nunc vel eros elementum, non feugiat erat lobortis. Phasellus sit ame pulvinar enim. Vivamus dapibus enim id urna maximus, ac tincidunt enim faucibus. Duis velmolestie magna. Duis in tortor malesuada mauris pharetra viverra. Vestibulum feugiat velit est,ac condimentum orci pharetra ac. Nunc mattis imperdiet dui non sollicitudin.",
      },
      {
        title: "Prueba 4",
        date: "Actualizado: " + today,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate id diam non efficitur. Sed suscipit nunc vel eros elementum, non feugiat erat lobortis. Phasellus sit ame pulvinar enim. Vivamus dapibus enim id urna maximus, ac tincidunt enim faucibus. Duis velmolestie magna. Duis in tortor malesuada mauris pharetra viverra. Vestibulum feugiat velit est,ac condimentum orci pharetra ac. Nunc mattis imperdiet dui non sollicitudin.",
      },
    ];

    posts.forEach((item, index) => {
      var post = `
          <article class="post">
              <h2>${item.title}</h2>
              <span class="date">${item.date}</span>
              <p>
                  ${item.content}
              </p>
              <a href="#" class="button-more">Read more</a>
          </article>
        `;

      //console.log(post);
      $("#posts").append(post);
    });
  }
  console.log(posts);

  // SELECTOR DE TEMAS

  //esto se carga al iniciar la pagina web
  var tema = $("#theme");
  var cargado = localStorage.getItem("color");
  //si no existe color guardado en el localstorage va a retornar null y lo validamos con un if
  if (cargado == null) {
    cargado = "css/green.css";
  }
  //cargamos el tema
  tema.attr("href", cargado);

  $("#to-green").click(function () {
    let green = "css/green.css"; //cargamos la ruta del css en una variable
    tema.attr("href", green);
    localStorage.setItem("color", green); // lo guardamos en el localStorage
  });

  $("#to-red").click(function () {
    let red = "css/red.css";
    tema.attr("href", red);
    localStorage.setItem("color", red);
  });

  $("#to-blue").click(function () {
    let blue = "css/blue.css";
    tema.attr("href", blue);
    localStorage.setItem("color", blue);
  });

  //Scroll ir arriba de la web
  $(".subir").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );

    return false;
  });

  // Login falso
  $("#login form").submit(function () {
    var form_email = $("#form_email").val();

    localStorage.setItem("form_email", form_email);
    console.log(form_email);
  });

  var form_email = localStorage.getItem("form_email");

  if (form_email != null && form_email != "undefined") {
    var about_parrafo = $("#about p");

    about_parrafo.html(
      "<br>Bienvenido," + "<strong>" + form_email + "</strong>"
    );
    about_parrafo.append('<a href="#" id="logout"> Cerrar sesion </a>');

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  //ACORDEON
  if(window.location.href.indexOf('about') > -1){
    $("#acordeon").accordion();
  }

  //reloj
  if(window.location.href.indexOf('clock') > -1){
    setInterval(function(){
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000)
  }  

  //Validacion
  if(window.location.href.indexOf('contact') > -1){
    $.validate({
      lang: 'es',
    });
  }  
  
});

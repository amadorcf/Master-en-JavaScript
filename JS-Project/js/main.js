$(document).ready(function(){

    // Slider
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          pager: true,
        });
      });


      const hoy = new Date()                // obtenemos la fecha actual
      // moment(hoy).format("YYYY-MM-DD hh:mm A"); // 2021-02-16 05:46 PM
      var today = moment(hoy).format("D MMMM YYYY");        // 16 Febrero 2021

    //Posts
    var posts =  [
        {title: "Prueba 1",
        date: 'Actualizado: '+ today,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate id diam non efficitur. Sed suscipit nunc vel eros elementum, non feugiat erat lobortis. Phasellus sit ame pulvinar enim. Vivamus dapibus enim id urna maximus, ac tincidunt enim faucibus. Duis velmolestie magna. Duis in tortor malesuada mauris pharetra viverra. Vestibulum feugiat velit est,ac condimentum orci pharetra ac. Nunc mattis imperdiet dui non sollicitudin.'
        },
        {title: "Prueba 2",
        date: 'Actualizado: '+ today,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate id diam non efficitur. Sed suscipit nunc vel eros elementum, non feugiat erat lobortis. Phasellus sit ame pulvinar enim. Vivamus dapibus enim id urna maximus, ac tincidunt enim faucibus. Duis velmolestie magna. Duis in tortor malesuada mauris pharetra viverra. Vestibulum feugiat velit est,ac condimentum orci pharetra ac. Nunc mattis imperdiet dui non sollicitudin.'
        },
        {title: "Prueba 3",
        date: 'Actualizado: '+ today,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate id diam non efficitur. Sed suscipit nunc vel eros elementum, non feugiat erat lobortis. Phasellus sit ame pulvinar enim. Vivamus dapibus enim id urna maximus, ac tincidunt enim faucibus. Duis velmolestie magna. Duis in tortor malesuada mauris pharetra viverra. Vestibulum feugiat velit est,ac condimentum orci pharetra ac. Nunc mattis imperdiet dui non sollicitudin.'
        },
        {title: "Prueba 4",
        date: 'Actualizado: '+ today,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate id diam non efficitur. Sed suscipit nunc vel eros elementum, non feugiat erat lobortis. Phasellus sit ame pulvinar enim. Vivamus dapibus enim id urna maximus, ac tincidunt enim faucibus. Duis velmolestie magna. Duis in tortor malesuada mauris pharetra viverra. Vestibulum feugiat velit est,ac condimentum orci pharetra ac. Nunc mattis imperdiet dui non sollicitudin.'
        },
    ];

    posts.forEach((item, index) =>{   
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>
           
        </article>
        `;

        console.log(post);
        $("#posts").append(post);
    })

    console.log(posts);

  });
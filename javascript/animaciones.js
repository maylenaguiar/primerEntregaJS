//Botón para ver más historia
$('#js-banda').append('<button id="botonMostrar">Ver más historia</button>');
$("#mostrar").css("display", "none");
$("#botonMostrar").click(() => { 
    $("#mostrar").slideToggle("slow", function(){
        $("#botonMostrar").empty(); 
        $("#botonMostrar").append('Ver menos');
    });
});
//Animación para scrollear hacia arriba
$("body").append(`</div>
                    <a class= "volver">Volver al inicio</a>
                   </div>`);
$('.volver').click( function(e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#subirIndex").offset().top  
    }, 2000);
} );

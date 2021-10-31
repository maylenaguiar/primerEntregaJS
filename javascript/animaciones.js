//Botón para ver más historia
$('#js-banda').append('<button id="botonMostrar">Ver más historia</button>');

$("#mostrar").css("display", "none");

$("#botonMostrar").click(() => { 
    $("#mostrar").slideToggle("slow");                
});
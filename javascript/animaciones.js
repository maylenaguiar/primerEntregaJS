$("#js-banda").append('<button id="botonMostrar">Ver más historia</button>');

$("#botonMostrar").click(() => { 
    $("#js-banda").prepend(`<div id="mostrar">
<p>Entre enero de 2017 y julio de 2018 graban su primer disco oficial que se titula “Subi Baja”, producido por Martín “El Bredda” Sanabria y masterizado por Daniel Osorio en el Ángel Mastering Estudio.</p>
<p>En enero de 2020 los cocos despiden “Subi baja” en Santana Bar con un lleno total. </p> 
<p>En plena pandemia editaron un video clip de la última presentación, y lanzaron a lo largo del año 3 canciones nuevas.</p>
<p>Además participaron de varios festivales nacionales e internacionales vía streaming. </p>
<p>En el 2021 los Cocos lanzan su último single “Tobogán”, una canción que tuvo muy buenas críticas y fue acompañado por un videoclip.</p>
                    </div>`);
    $("#botonMostrar").toggle("slow");                
});
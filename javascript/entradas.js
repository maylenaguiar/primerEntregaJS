//Aquí traigo el array de ENTRADAS

const entradas = JSON.parse(dataEntradas);

//Botones para cada entrada

for(const entrada of entradas){
    $('#entradas').append(` 
    <div id="caja${entrada.id}">
    <h4> ${entrada.nombre}</h4>
    <b> $ ${entrada.valor}</b>
    <button id="btn${entrada.id}">Ver fecha</button>
    </div>
     `);
    $(`#btn${entrada.id}`).on('click', function(){
        $(`#caja${entrada.id}`).append(`<br>
        <br>
        <p class='estilo'>Próximamente ${entrada.nombre}</p>`);
        $('p').css("background-color","white");
        $("p").css('width', '50%');
        $('p').css('margin-left', '25%');
        $(".estilo").css("color", "black")
        .css("display", "none")
        .delay(1000)
        .slideDown(2000);
    });
}



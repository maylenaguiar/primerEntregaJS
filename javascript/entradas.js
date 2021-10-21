const entradas =[
    {id: 1, nombre: 'Entradas Roxy', valor: 600, cantidad: 200},
    {id: 2, nombre: 'Entradas Córdoba', valor: 500, cantidad: 300},
    {id: 3, nombre: 'Entradas Rosario', valor: 400, cantidad: 200},
];

for(const entrada of entradas){
    $('#entradas').append(` 
    <div id="caja${entrada.id}">
    <h4> ${entrada.nombre}</h4>
    <b> $ ${entrada.valor}</b>
    <button id="btn${entrada.id}">Comprar entrada</button>
    </div>
     `);
    $(`#btn${entrada.id}`).on('click', function(){
        $(`#caja${entrada.id}`).append(`<br>
        <br>
        <p class='estilo'>Compraste ${entrada.nombre}</p>`);
        $('p').css("background-color","white");
        $("p").css('width', '50%');
        $('p').css('margin-left', '25%');
        $(".estilo").css("color", "black")
        .css("display", "none")
        .delay(1000)
        .slideDown(2000);
    });
}


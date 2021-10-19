const entradas =[
    {id: 1, nombre: 'Entradas Roxy', valor: 600, cantidad: 200},
    {id: 2, nombre: 'Entradas Córdoba', valor: 500, cantidad: 300},
    {id: 3, nombre: 'Entradas Rosario', valor: 400, cantidad: 200},
];

for(const entrada of entradas){
    $('#entradas').append(` 
    <div id="may${entrada.id}">
    <h4> Producto: ${entrada.nombre}</h4>
    <b> $ ${entrada.valor}</b>
    <button id="btn${entrada.id}">Comprar entrada</button>
    </div>
    `);
    $(`#btn${entrada.id}`).on('click', function(){
        $(`#may${entrada.id}`).append(`<p class='estilo'>Compraste ${entrada.nombre}</p>`);
        $('p').css("background-color","white");
        $("p").css("width", "50%");
        $('p').css('margin-left', '25%');
        $(".estilo").css("color", "black")
        .slideUp(2000)
        .delay(2000)
        .slideDown(2000);
    });
}

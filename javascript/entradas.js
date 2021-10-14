const entradas =[
    {id: 1, nombre: 'Entradas Roxy', valor: 600, cantidad: 200},
    {id: 2, nombre: 'Entradas Córdoba', valor: 500, cantidad: 300},
    {id: 3, nombre: 'Entradas Rosario', valor: 400, cantidad: 200},
];

for(const entrada of entradas){
    $('#entradas').append(` 
    <div>
    <h4> Producto: ${entrada.nombre}</h4>
    <b> $ ${entrada.valor}</b>
    <button id="btn${entrada.id}">Comprar entrada</button>
    </div>
    `);
    $(`#btn${entrada.id}`).on('click', function(){
        $('#entradas').append(`<p>Compraste ${entrada.nombre}</p>`);
    });
}
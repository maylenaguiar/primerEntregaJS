//Array de merchandising
const mercaderia = [
                {id: 1, nombre: "Remera blanca", precio: 300},
                {id: 2, nombre: "Remera negra", precio: 310},
                {id: 3, nombre: "Taza con logo", precio: 150},
                {id: 4, nombre: "Gorra blanca", precio: 120},
                {id: 5, nombre: "Remera Violeta", precio: 300},
                {id: 6, nombre: "Remera con Logo", precio: 310},
                {id: 7, nombre: "Gorra violeta", precio: 150},
                {id: 8, nombre: "Taza tapa disco", precio: 120},
];

//Generar productos en el HTML
const contenedorMercaderia = document.getElementById('js-contenedor');

const mercaderiaHTML = (elemento) =>{
    return `<div class="card">
            <div class="card-body">
                <h6 class="card-title">${elemento.nombre}</h6>
                <h6 class="card-subtitle mb-2 text-muted">$ ${elemento.precio}</h5>
            </div>
            </div>
            <br>`;
}

const generarHTML = (mercaderia, contenedor) => {
    contenedor.innerHTML= ""
    if(mercaderia.length > 0) {
        for (const elemento of mercaderia) {
            const elementosHTML = mercaderiaHTML(elemento)
            contenedor.innerHTML += elementosHTML
        }
    } 
    else{
        contenedor.innerHTML = `<p> No se encuentra el producto buscado </p>`
    } 
}
generarHTML(mercaderia,contenedorMercaderia);

//Input para Buscador de Discos
const buscarInput = document.getElementById("buscarProductos");
const buscarBoton = document.getElementById("buscarBoton");

 const filtrarMercaderia = () => {
    const buscarValorInput = buscarInput.value;

    const productoFiltrado = mercaderia.filter((producto) => {
        const productoNombre = producto.nombre.toLowerCase();
        return productoNombre.includes(buscarValorInput.toLowerCase());
    });
    generarHTML(productoFiltrado,contenedorMercaderia);
    
 }

 
// //Botón buscar merchandising
buscarBoton.addEventListener('click', filtrarMercaderia);
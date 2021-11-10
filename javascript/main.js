// Creo la clase Discos
class Discos{
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad   = cantidad;
        }
        sumarIva(){
            this.precio = this.precio * 1.21;
    }
 }
//Creo el array de productos
const productos = [];
// Creo el array Carrito
const carrito = [];
//Creo mis objetos o productos. En este caso son discos de música
const subibaja = new Discos(1, 'subibaja', 800, 22);
const deOtroPlaneta = new Discos(2, 'de otro planeta', 1000, 34);
const cocosLocos = new Discos (3, 'cocos locos', 750, 30);
const personaje = new Discos (4, 'personaje', 900, 16);
subibaja.sumarIva ();
deOtroPlaneta.sumarIva();
cocosLocos.sumarIva();
personaje.sumarIva();
productos.push({subibaja});
productos.push({deOtroPlaneta});
productos.push({cocosLocos});
productos.push({personaje});
//Creo variable para ver total del carrito
let precioFinal = 0;
//Funcion para renderizar carrito
const mostrarCarrito =(elementos) => {
    let lista = 0;
    let precioFinal = 0;
$('#contenedorProductos').empty();
$('#js-precioTotal').empty();
    for(const elemento of elementos){
        lista += 1;
        precioFinal += elemento.precio;
        $('#contenedorProductos').append( `<div class= eliminarSubi>
        <p class ="agregados"> Agregaste ${elemento.nombre} - a $ ${elemento.precio}</p> 
        <button id='eliminar${elemento.id}${lista}'>Eliminar</button> 
        </div>`
        );
        $(`#eliminar${elemento.id}${lista}`).on('click', ()=>{
            let eliminarElemento = '';
            eliminarElemento =productos.indexOf(elemento);
            elementos.splice(eliminarElemento,1);
            precioFinal -= elemento.precio;
            mostrarCarrito(elementos);
            if(elementos.length === 0){
                $('#js-productosAgregados').css("display", "none");
            }
        })
    }
    $('#js-precioTotal').append(`El total es $${precioFinal}`);
}
//Botones para agregar discos al carrito
let unBoton = document.getElementById("subi");
let unBotonDiv = document.getElementById("popUpsubi");
unBoton.addEventListener('click', () => {
    carrito.push(subibaja);
    guardarCarrito('carritoDeCompras',JSON.stringify(carrito));
    precioFinal += subibaja.precio;
    if(carrito.length == 1){
        $('#js-productosAgregados').css('display', 'block');
        mostrarCarrito(carrito);
        let boton = document.getElementById("boton");
        boton.addEventListener('click', () => {
        let totalCompra = document.createElement("h3");
        totalCompra.innerHTML= `<div class= "carritoLleno"> 
                                <h3>Gracias por tu compra</h3>
                                <button id="finalizar">Salir</button></div>`
        $(".cart").empty();
        document.body.appendChild (totalCompra);
        let salir = document.getElementById('finalizar');
        salir.addEventListener('click', () =>{
        $('.carritoLleno').remove();
        })    
    })
}
    else if(carrito.length >= 2){
        mostrarCarrito(carrito);
    }
  })      
let esteBoton= document.getElementById('planeta');
let otroDiv = document.getElementById('popUpPlaneta');
esteBoton.addEventListener('click', () => {
    carrito.push(deOtroPlaneta);
    guardarCarrito('carritoDeCompras',JSON.stringify(carrito));
    precioFinal += deOtroPlaneta.precio;
    if(carrito.length == 1){
        $('#js-productosAgregados').css('display', 'block');
        mostrarCarrito(carrito);
        let boton = document.getElementById("boton");
        boton.addEventListener('click', () => {
        let totalCompra = document.createElement("h3");
        totalCompra.innerHTML= `<div class= carritoLleno> 
                                <h3>Gracias por tu compra</h3>
                                <button id="finalizar">Salir</button></div>`
        $(".cart").empty();
        document.body.appendChild (totalCompra);
        let salir = document.getElementById('finalizar');
        salir.addEventListener('click', () =>{
        $('.carritoLleno').remove();
        })    
    })
    }
    else if(carrito.length >= 2){
        mostrarCarrito(carrito);
    }
})
let tercerBoton= document.getElementById('personaje');
let tercerDiv = document.getElementById('popUpPersonaje');
tercerBoton.addEventListener('click', () => {
    carrito.push(personaje);
    guardarCarrito('carritoDeCompras',JSON.stringify(carrito));
    precioFinal += personaje.precio;
    if(carrito.length == 1){
        $('#js-productosAgregados').css('display', 'block');
        mostrarCarrito(carrito);
        let boton = document.getElementById("boton");
        boton.addEventListener('click', () => {
        let totalCompra = document.createElement("h3");
        totalCompra.innerHTML= `<div class= carritoLleno> 
                                <h3>Gracias por tu compra</h3>
                                <button id="finalizar">Salir</button></div>`
        $(".cart").empty();
        document.body.appendChild (totalCompra);
        let salir = document.getElementById('finalizar');
        salir.addEventListener('click', () =>{
        $('.carritoLleno').remove();
        })
    })
    }
    else if(carrito.length >= 2){
        mostrarCarrito(carrito);
    }
    })
        let cuartoBoton= document.getElementById('locos');
        let cuartoDiv = document.getElementById('popUpLocos');
        cuartoBoton.addEventListener('click', () => {
        carrito.push(cocosLocos);
        guardarCarrito('carritoDeCompras',JSON.stringify(carrito));
        precioFinal += cocosLocos.precio;
    if(carrito.length == 1){
        $('#js-productosAgregados').css('display', 'block');
        mostrarCarrito(carrito);
        let boton = document.getElementById("boton");
        boton.addEventListener('click', () => {
        let totalCompra = document.createElement("h3");
        totalCompra.innerHTML= `<div class= carritoLleno> 
                                <h3>Gracias por tu compra</h3>
                                <button id="finalizar">Salir</button></div>`
        $(".cart").empty();
        document.body.appendChild (totalCompra);
        let salir = document.getElementById('finalizar');
        salir.addEventListener('click', () =>{
        $('.carritoLleno').remove();
        })    
    })
    }
    else if(carrito.length >= 2){
        mostrarCarrito(carrito);
    }  
})
//Productos guardados en localStorage
const guardarLocal = (productos,precio) => {localStorage.setItem(productos,precio)};
guardarLocal('listaProductos',JSON.stringify(productos));
//Carrito de compras guardados en localStorage
const guardarCarrito = (carritoComprado,carrito) => {localStorage.setItem(carritoComprado,carrito)};
guardarCarrito('carritoDeCompras',JSON.stringify(carrito));
//Uso de Api para formulario simulado
$(document).ready(function () {
const APIURL = "http://jsonplaceholder.typicode.com/posts";
const info = {
    nombre: "Cocos",
    mail: "cocos@cocos.com.ar",
};
$("#formulario").append(
    `<button id="post">Enviar suscripción</button>`
);
$("#post").click((e) => {
    e.preventDefault();
    $.ajax({
        method: "POST",
        url: APIURL,
        data: info,
        success: function (res) {
            $("#formulario").empty();
            $("#respuesta").append(
                `<h4>Formulario enviado exitosamente: <br> ${res.nombre} <br> ${res.mail}</h4>`
            );
        },
    });
});
});

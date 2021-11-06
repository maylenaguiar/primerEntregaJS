// Creo la clase Discos
class Discos{
    constructor(nombre, precio, cantidad) {
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
const subibaja = new Discos('subibaja', 800, 22);
const deOtroPlaneta = new Discos('de otro planeta', 1000, 34);
const cocosLocos = new Discos ('cocos locos', 750, 30);
const personaje = new Discos ('personaje', 900, 16);
subibaja.sumarIva ();
deOtroPlaneta.sumarIva();
cocosLocos.sumarIva();
personaje.sumarIva();
productos.push({subibaja});
productos.push({deOtroPlaneta});
productos.push({cocosLocos});
productos.push({personaje});
//Creo variable para ver total del carrito
let carritoTotal=0;
//Botones para agregar discos al carrito
let unBoton = document.getElementById("subi");
let unBotonDiv = document.getElementById("popUpsubi");
unBoton.addEventListener('click', () => {
    carrito.push({subibaja});
    carritoTotal += subibaja.precio;
    if(carrito.length == 1){
        $('#js-productosAgregados').append(
                        `<div class="cart"> 
                            <p> Agregaste Subibaja - Precio $ ${subibaja.precio}</p> 
                            <button id="eliminar">Eliminar del carrito</button>
                            <button id="boton">Finalizar Compra</button>
                        </div>`   
        );
        let eliminar = document.getElementById("eliminar");
        eliminar.addEventListener('click', () => {
            carrito.splice({subibaja});
            console.log(carrito);
        })
        let boton = document.getElementById("boton");
        boton.addEventListener('click', () => {
        let totalCompra = document.createElement("h3");
        totalCompra.innerHTML= `<div class= carritoLleno> 
                                <h3>El Total de tu compra es $ ${carritoTotal}</h3>
                                <button id="finalizar">Finalizar</button></div>`
        $(".cart").empty();
        document.body.appendChild (totalCompra);
        let cerrar = document.getElementById('finalizar');
        cerrar.addEventListener('click', () =>{
        $('.carritoLleno').remove();
        })    
    })
}
    else if(carrito.length >= 2){
        $('.cart').prepend(
        `<p> Agregaste Subibaja - Precio $ ${subibaja.precio}</p> 
        <button id="eliminar">Eliminar del carrito</button>`
        );
    }
  })      
let esteBoton= document.getElementById('planeta');
let otroDiv = document.getElementById('popUpPlaneta');
esteBoton.addEventListener('click', () => {
    carrito.push({deOtroPlaneta});
    carritoTotal += deOtroPlaneta.precio;
    if(carrito.length == 1){
        $('#js-productosAgregados').append(
                        `<div class="cart"> 
                            <p> Agregaste De otro Planeta - Precio $ ${deOtroPlaneta.precio}</p> 
                            <button id="eliminar">Eliminar del carrito</button>
                            <button id="boton">Finalizar Compra</button>
                            </div>`   
        );
        let boton = document.getElementById("boton");
        boton.addEventListener('click', () => {
        let totalCompra = document.createElement("h3");
        totalCompra.innerHTML= `<div class= carritoLleno> 
                                <h3>El Total de tu compra es $ ${carritoTotal}</h3>
                                <button id="finalizar">Finalizar</button></div>`
        $(".cart").empty();
        document.body.appendChild (totalCompra);
        let cerrar = document.getElementById('finalizar');
        cerrar.addEventListener('click', () =>{
        $('.carritoLleno').remove();
        })    
    })
    }
    else if(carrito.length >= 2){
        $('.cart').prepend(
        `<p> Agregaste De otro Planeta - Precio $ ${deOtroPlaneta.precio}</p> 
        <button id="eliminar">Eliminar del carrito</button>`
        );
    }
})
let tercerBoton= document.getElementById('personaje');
let tercerDiv = document.getElementById('popUpPersonaje');
tercerBoton.addEventListener('click', () => {
    carrito.push({personaje});
    carritoTotal += personaje.precio;
    if(carrito.length == 1){
        $('#js-productosAgregados').append(
                        `<div class="cart"> 
                            <p> Agregaste Personaje - Precio $ ${personaje.precio}</p> 
                            <button id="eliminar">Eliminar del carrito</button>
                            <button id="boton">Finalizar Compra</button>
                        </div>`   
        );
        let boton = document.getElementById("boton");
        boton.addEventListener('click', () => {
        let totalCompra = document.createElement("h3");
        totalCompra.innerHTML= `<div class= carritoLleno> 
                                <h3>El Total de tu compra es $ ${carritoTotal}</h3>
                                <button id="finalizar">Finalizar</button></div>`
        $(".cart").empty();
        document.body.appendChild (totalCompra);
        let cerrar = document.getElementById('finalizar');
        cerrar.addEventListener('click', () =>{
        $('.carritoLleno').remove();
        })    
    })
    }
    else if(carrito.length >= 2){
        $('.cart').prepend(
        `<p> Agregaste Personaje - Precio $ ${personaje.precio}</p>
        <button id="eliminar">Eliminar del carrito</button>`
        );
    }
})
let cuartoBoton= document.getElementById('locos');
let cuartoDiv = document.getElementById('popUpLocos');
cuartoBoton.addEventListener('click', () => {
    carrito.push({cocosLocos});
    carritoTotal += cocosLocos.precio;
    if(carrito.length == 1){
        $('#js-productosAgregados').append(
                        `<div class="cart"> 
                            <p> Agregaste Cocos Locos - Precio $ ${cocosLocos.precio}</p>  
                            <button id="eliminar">Eliminar del carrito</button>
                            <button id="boton">Finalizar Compra</button>
                        </div>`   
        );
        let boton = document.getElementById("boton");
        boton.addEventListener('click', () => {
        let totalCompra = document.createElement("h3");
        totalCompra.innerHTML= `<div class= carritoLleno> 
                                <h3>El Total de tu compra es $ ${carritoTotal}</h3>
                                <button id="finalizar">Finalizar</button></div>`
        $(".cart").empty();
        document.body.appendChild (totalCompra);
        let cerrar = document.getElementById('finalizar');
        cerrar.addEventListener('click', () =>{
        $('.carritoLleno').remove();
        })    
    })
    }
    else if(carrito.length >= 2){
        $('.cart').prepend(
        `<p> Agregaste Cocos Locos - Precio $ ${cocosLocos.precio}</p> 
        <button id="eliminar">Eliminar del carrito</button>`
        );
    }  
})
//Objetos guardados en localStorage
const guardarLocal = (productos,precio) => {localStorage.setItem(productos,precio)};
guardarLocal('listaProductos',JSON.stringify(productos));
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

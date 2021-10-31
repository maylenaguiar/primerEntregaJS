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

//Creo mis objetos o productos

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

console.log(productos);

let carritoTotal=0;

//Botones para comprar discos

let unBoton = document.getElementById("subi");
let unBotonDiv = document.getElementById("popUpsubi");

unBoton.addEventListener('click', () => {
    carrito.push({subibaja});
    carritoTotal += subibaja.precio;
    let unaCompra = document.createElement("div");
    unaCompra.innerHTML= `<div class="cart"> 
                            <h3> Agregaste Subibaja - Precio $ ${subibaja.precio}</h3> 
                            <p> Agregado al carrito </p> </div>`;
    document.body.appendChild(unaCompra);

    })        

let esteBoton= document.getElementById('planeta');
let otroDiv = document.getElementById('popUpPlaneta');

esteBoton.addEventListener('click', () => {
    carrito.push({deOtroPlaneta});
    carritoTotal += deOtroPlaneta.precio;
    let estaCompra = document.createElement("div");
    estaCompra.innerHTML= `<div class="cart-1"> 
                            <h3> Agregaste De Otro Planeta- Precio $ ${deOtroPlaneta.precio}</h3> 
                            </div>`;
    document.body.appendChild(estaCompra); 
})

let tercerBoton= document.getElementById('personaje');
let tercerDiv = document.getElementById('popUpPersonaje');

tercerBoton.addEventListener('click', () => {
    carrito.push({personaje});
    carritoTotal += personaje.precio;
    let otraCompra = document.createElement("div");
    otraCompra.innerHTML= `<div class="cart-2">
                            <h3> Agregaste Personaje - Precio ${personaje.precio}</h3> 
                            </div>`;
    document.body.append(otraCompra); 
})
let cuartoBoton= document.getElementById('locos');
let cuartoDiv = document.getElementById('popUpLocos');

cuartoBoton.addEventListener('click', () => {
    carrito.push({cocosLocos});
    carritoTotal += cocosLocos.precio;
    let nuevaCompra = document.createElement("div");
    nuevaCompra.innerHTML= `<div class="cart-3"> 
                            <h3> Agregaste Cocos Locos- Precio $ : ${cocosLocos.precio}</h3> 
                             </div>`;
    document.body.appendChild(nuevaCompra);  

})

//Finalización de compra del disco

if (carrito != 0){
    const carrito= [];
} else{
let boton = document.getElementById("boton");
let botonDiv = document.getElementById("popUp");

boton.addEventListener('click', () => {
let totalCompra = document.createElement("h3");
totalCompra.innerHTML= `<div class= carritoLleno> 
                        <h3>El Total de tu compra es $ ${carritoTotal} </div>`
$(".cart").empty();
$(".cart-1").empty();
$(".cart-2").empty();
$(".cart-3").empty();
document.body.appendChild (totalCompra);
})
}

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

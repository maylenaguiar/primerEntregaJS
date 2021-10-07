
// Creo la clase Discos
class Discos{

    constructor(precio, cantidad) {

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

const subibaja = new Discos(800, 22);
const deOtroPlaneta = new Discos(1000, 34);
const cocosLocos = new Discos (750, 30);
const personaje = new Discos (900, 16);

subibaja.sumarIva ();
deOtroPlaneta.sumarIva();
cocosLocos.sumarIva();
personaje.sumarIva();

let carritoTotal=0;

let unBoton = document.getElementById("subi");
let unBotonDiv = document.getElementById("popUpsubi");

unBoton.addEventListener('click', () => {
    carrito.push({subibaja});
    carritoTotal += subibaja.precio;
    let unaCompra = document.createElement("div");
    unaCompra.innerHTML= `<h3> El Precio de Subibaja es $ : ${subibaja.precio}</h3> 
                            <p> Agregado al carrito </p>`;
    document.body.appendChild(unaCompra);

    })        
    
let esteBoton= document.getElementById('planeta');
let otroDiv = document.getElementById('popUpPlaneta');

esteBoton.addEventListener('click', () => {
    carrito.push({deOtroPlaneta});
    carritoTotal += deOtroPlaneta.precio;
    let estaCompra = document.createElement("div");
    estaCompra.innerHTML= `<h3> El Precio de De otro planeta es $ : ${deOtroPlaneta.precio}</h3> 
                            <p> Agregado al carrito </p>`;
    document.body.appendChild(estaCompra); 
})

let tercerBoton= document.getElementById('personaje');
let tercerDiv = document.getElementById('popUpPersonaje');

tercerBoton.addEventListener('click', () => {
    carrito.push({personaje});
    carritoTotal += personaje.precio;
    let otraCompra = document.createElement("div");
    otraCompra.innerHTML= `<h3> El Precio de Personaje es $ : ${personaje.precio}</h3> 
                                <p> Agregado al carrito </p>`;
    document.body.appendChild(otraCompra); 
})
let cuartoBoton= document.getElementById('locos');
let cuartoDiv = document.getElementById('popUpLocos');

cuartoBoton.addEventListener('click', () => {
    carrito.push({cocosLocos});
    carritoTotal += cocosLocos.precio;
    let nuevaCompra = document.createElement("div");
    nuevaCompra.innerHTML= `<h3> El Precio de Cocos Locos es $ : ${cocosLocos.precio}</h3> 
                            <p> Agregado al carrito </p>`;
    document.body.appendChild(nuevaCompra);  

})
if (carrito != 0){
    const carrito= [];
} else{
let boton = document.getElementById("boton");
let botonDiv = document.getElementById("popUp");

boton.addEventListener('click', () => {
let totalCompra = document.createElement("h3");
totalCompra.textContent= "El Total de tu compra es $ " + carritoTotal
document.body.appendChild (totalCompra);
})
}

/*

function comprar(){    
let boton = document.getElementById("boton");
let botonDiv = document.getElementById("popUp");

boton.addEventListener('click', () => {
let totalCompra = document.createElement("h3");
totalCompra.textContent= "El Total de tu compra es $ " + carritoTotal
document.body.appendChild (totalCompra);
})

}

/*
const guardarLocal = (producto, precio) => {localStorage.setItem(producto,precio)};

for (const producto of productos){
    guardarLocal(productos.precio,JSONstringfy(producto));
}*/


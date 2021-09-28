// Bienvenida
alert('Bienvenidx a nuestro sitio web, nosotros somos Cocos Música')
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

// Creo el array Carrito
const carrito = [];

//Creo mis objetos o productos

const subibaja = new Discos(800, 22);
const deOtroPlaneta = new Discos(1000, 34);

subibaja.sumarIva ();
deOtroPlaneta.sumarIva();

let carritoTotal=0;

//Comprar discos
   let ingreseDisco = prompt('Ingrese el nombre del disco a comprar o ESC para salir');   
    while (ingreseDisco != 'ESC'){

        switch (ingreseDisco) {
            case 'subibaja':
            carrito.push({subibaja});
            carritoTotal += subibaja.precio;
            let unaCompra = document.createElement("div");
            unaCompra.innerHTML= `<h3> El Precio de Subibaja es $ : ${subibaja.precio}</h3> 
                                    <p> Gracias por tu compra </p>`;
            document.body.appendChild(unaCompra);         
            break;
            
            case 'De otro planeta': 
            carrito.push({deOtroPlaneta});
            carritoTotal += deOtroPlaneta.precio;
            let estaCompra = document.createElement("div");
            estaCompra.innerHTML= `<h3> El Precio de De otro planeta es $ : ${deOtroPlaneta.precio}</h3> 
                                    <p> Gracias por tu compra </p>`;
            document.body.appendChild(estaCompra); 
            break;

            default:
            alert ('Aún no escribimos más canciones, pero ya falta poco')
            break;
        }
    ingreseDisco = prompt('Ingrese otro o ESC para finalizar compra e ir a pagar');
}

let totalCompra = document.createElement("h3");
totalCompra.innerHTML= "El Total de tu compra es $ " + carritoTotal
document.body.appendChild (totalCompra);

if (ingreseDisco == 'ESC') {
    alert('Gracias por pasar, te esperamos la próxima')
}



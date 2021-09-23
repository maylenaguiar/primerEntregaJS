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
            alert('Compraste Subibaja a $800 + Iva');
            break;
            
            case 'De otro planeta': 
            carrito.push({deOtroPlaneta});
            carritoTotal += deOtroPlaneta.precio;
            alert('Compraste De otro planeta a $1000 + Iva');
            break;

            default:
            alert ('Aún no escribimos más canciones, pero ya falta poco')
            break;
        }
    ingreseDisco = prompt('Ingrese otro o ESC para finalizar compra e ir a pagar');
}
alert ('El total de tu compra es $ ' + carritoTotal);

if (ingreseDisco == 'ESC') {
    alert('Gracias por pasar, te esperamos la próxima')
}



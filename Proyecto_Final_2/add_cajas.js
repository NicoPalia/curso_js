

let datos = []; // ARRAY DE cajas DESDE stock.json
let cajas = []; // cajas CON ATRIBUTOS Y FUNCIONES PARA USARLO EN main.js

// GET stock.json
let url = "./data/cajas.json"
$.getJSON(url, function(response, state){
    console.log("Entrando a la  funcion")
    if(state == "success"){
        datos = response;

        // GUARDAR "datos" EN EL ARRAY "cajas" CON SUS ATRIBUTOS Y FUNCIONES DEL CONTRUCTOR "caja"
        for(let item of datos){
            cajas.push(new caja(item.id, item.nombre, item.precio, item.imagen));
        }

        //GUARDAR ARRAY cajas EN EL LOCAL STORAGE
        let cajasJSON = JSON.stringify(cajas);
        localStorage.setItem("data", cajasJSON);

        // AGREGAR cajas AL DOCUMENT
        let cajasDOM = document.querySelector("#cajasDOM");

        for(let el of datos){
            let divCaja = document.createElement("div");
            divCaja.classList.add("caja");
            divCaja.innerHTML = `
            <div class="grid-item">
                <h2>Caja Fuerte ${el.id}</h2>
                <img src="${el.imagen}" alt="${el.nombre}">
                <p class="price">$ARS ${el.precio}</p>
                <p> Caja fuerte de acero. Maxima seguridad</p>
                <button class="btn btn-primary" id="agregarcaja${el.id}">Agregar</button>
            </div>`;
            cajasDOM.appendChild(divCaja);
        };
    }
});

//FUNCION PARA CONSTRUIR CADA caja DENTRO DEL ARRAY "cajas"
function caja(id, nombre, precio, imagen){
    
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.imagen = imagen;
    
    // Agregar item al carrito y al Local Storage
    this.agregarCarrito = function(){
        carrito.push(new caja(this. id, this.nombre, this.precio));
        
        //Actualizar en el Local Storage
        carritoJSON = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJSON);

        // Numero de items en el icono del carrito
        actualizarNumeroCarrito();
    }
}


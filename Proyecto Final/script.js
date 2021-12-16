class Cliente {
    constructor(nombre, apellido, dni, email, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.direccion = direccion;
    }
}

// Definicion de variables
let clientes;
let formCliente = document.getElementById('formCliente')
let divClientes = document.getElementById('divClientes')
let parrafoError = document.getElementById('parrafoError')

// Comprueba la existencia de un cliente
if(localStorage.getItem('clientes')) {
    clientes = JSON.parse(localStorage.getItem('clientes'))
} else {
    clientes = []
}

//Obtengo informacion del formulario 
formCliente.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombreCliente = document.getElementById("nombre").value
    let apellidoCliente = document.getElementById("apellido").value
    let dniCliente = document.getElementById("dni").value
    let emailCliente = document.getElementById("email").value
    let direccionCliente = document.getElementById("direccion").value

    let objetoCliente = new Cliente(nombreCliente, apellidoCliente, dniCliente, emailCliente, direccionCliente)
    
    clientes.push(objetoCliente)

    localStorage.setItem('clientes', JSON.stringify(clientes))

    formCliente.reset()
})

//Muestro informacion del storage a traves de un boton
document.getElementById('botonClientes').addEventListener('click', () => {
    let clientesStorage = JSON.parse(localStorage.getItem('clientes'))

    if(divClientes.children.length == 0) {
        clientesStorage.forEach((clienteArray, indice) => {
            divClientes.innerHTML += `
                <div class="card" id="cliente${indice}" style="width: 18rem;margin: 6px">
                    <div class="card-body">
                        <h3> Usuario Activo </h3>
                        <h5 class="card-title">${clienteArray.nombre} ${clienteArray.apellido}</h5>
                        <p class="card-text">${clienteArray.dni}</p>
                        <p class="card-text">${clienteArray.email}</p>
                        <p class="card-text">${clienteArray.direccion}</p>
                       
                    </div>
                </div>
            
            `
        }) 

        //Añado el evento eliminar a las cards
        clientesStorage.forEach((clienteArray, indice) => {
            document.getElementById(`boton${indice}`).addEventListener('click', () => {
                document.getElementById(`cliente${indice}`).remove()
                clientes.splice(indice, 1)
                localStorage.setItem('clientes', JSON.stringify(clientes))
                console.log(`El cliente ${clienteArray.nombre} ha sido eliminado`)
            })
        })

    } else {
        parrafoError.innerText = "Por favor deje de dar click a el boton Cargar Clientes"
    }

})






// codigod e productos 

// let stockProductos = [
//     {id: 1, nombre: "Caja fuerte", tipo: "Simple", desc: "Caja fuerte reforzada de acero",puertas: 1, precio: 200000, img: '/img/box.png'},
//     {id: 2, nombre: "Caja fuerte doble", tipo: "Doble", desc: "Caja fuerte reforzada de acero",puertas: 2, precio: 2300000, img: '/img/box.png'},
//     {id: 3, nombre: "Caja fuerte Bajo mesada", tipo: "Bajo mesada", desc: "Caja fuerte reforzada de acero",puertas: 1, precio: 150000, img: '/img/box.png'},
//     {id: 4, nombre: "Caja fuerte pequeña", tipo: "Enana", desc: "Caja fuerte reforzada de acero",puertas: 1, precio: 100000, img: '/img/box.png'},
//     {id: 5, nombre: "Caja fuerte para amurar", tipo: "Encastre", desc: "Caja fuerte reforzada de acero",puertas: 1, precio: 20000, img: '/img/box.png'},
//     {id: 6, nombre: "Caja fuerte Buzon", tipo: "Buzon", desc: "Caja fuerte reforzada de acero",puertas: 1, precio: 500000, img: '/img/box.png'},
// ]

// let carritoDeCompras = []

// agregarAlCarrito()

// function agregarAlCarrito() {

//     let elijoProducto = parseInt(prompt('ingrese su ID de su producto')) 

//     let productoAgregar = stockProductos.filter((el) => el.id == elijoProducto)[0]
//     carritoDeCompras.push(productoAgregar)
//      console.log(carritoDeCompras)
//     actualizarCarrito()
    
// }

// function actualizarCarrito() 
// {
//     console.log('cantidad de productos agregados ' + carritoDeCompras.length)
//     let suma = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

//     console.log('la suma total de su Carrito es $' + suma)
// }

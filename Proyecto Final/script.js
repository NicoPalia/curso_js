let stockProductos = [
    {id: 1, nombre: "Caja fuerte", tipo: "Simple", desc: "Caja fuerte reforzada de acero",puertas: 1, precio: 200000, img: '/img/box.png'},
    {id: 2, nombre: "Caja fuerte doble", tipo: "Doble", desc: "Caja fuerte reforzada de acero",puertas: 2, precio: 2300000, img: '/img/box.png'},
    {id: 3, nombre: "Caja fuerte Bajo mesada", tipo: "Bajo mesada", desc: "Caja fuerte reforzada de acero",puertas: 1, precio: 150000, img: '/img/box.png'},
    {id: 4, nombre: "Caja fuerte pequeña", tipo: "Enana", desc: "Caja fuerte reforzada de acero",puertas: 1, precio: 100000, img: '/img/box.png'},
    {id: 5, nombre: "Caja fuerte para amurar", tipo: "Encastre", desc: "Caja fuerte reforzada de acero",puertas: 1, precio: 20000, img: '/img/box.png'},
    {id: 6, nombre: "Caja fuerte Buzon", tipo: "Buzon", desc: "Caja fuerte reforzada de acero",puertas: 1, precio: 500000, img: '/img/box.png'},
]

let carritoDeCompras = []

agregarAlCarrito()

function agregarAlCarrito() {

    let elijoProducto = parseInt(prompt('ingrese su ID de su producto')) 

    let productoAgregar = stockProductos.filter((el) => el.id == elijoProducto)[0]
    carritoDeCompras.push(productoAgregar)
     console.log(carritoDeCompras)
    actualizarCarrito()
    
}

function actualizarCarrito() {
    console.log('cantidad de productos agregados ' + carritoDeCompras.length)
    let suma = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

    console.log('la suma total de su Carrito es $' + suma)
}
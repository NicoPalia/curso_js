class Cliente {
    constructor(nombre, apellido, email, comentario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.comentario = comentario;
    }
}
// Muestro el registro
document.getElementById('botonComentario').addEventListener('click', () => {
    divRegistro.innerHTML += `
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" name="nombre" >
        </div>
        <div class="mb-3">
            <label for="apellido" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="apellido" name="apellido" >
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" >
          </div>
          <div class="mb-3">
            <label for="comentario" class="form-label">Comentario</label>
            <input type="text" class="form-control" id="comentario" name="comentario" >
          </div>
        <button type="submit" class="btn btn-primary">Cargar Comentario</button><br><br>
    `
})



// Definicion de variables
let clientes;
let divRegistro = document.getElementById("divComentario");
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
formCliente.addEventListener('submit', () => {

    let nombreCliente = document.getElementById("nombre").value
    let apellidoCliente = document.getElementById("apellido").value
    let emailCliente = document.getElementById("email").value
    let comentarioCliente = document.getElementById("comentario").value

    let objetoCliente = new Cliente(nombreCliente, apellidoCliente, emailCliente, comentarioCliente)
    
    clientes.push(objetoCliente)

    localStorage.setItem('clientes', JSON.stringify(clientes))

    formCliente.reset()
})

//Muestro informacion del storage a traves de un boton
document.getElementById('botonClientes').addEventListener('click', () => {
    let clientesStorage = JSON.parse(localStorage.getItem('clientes'))
        clientesStorage.forEach((clienteArray, indice) => {
            divClientes.innerHTML += `
                <div class="card" id="cliente${indice}" style="width: 18rem;margin: 6px">
                    <div class="card-body">
                        <h5 class="card-title">${clienteArray.nombre} ${clienteArray.apellido}</h5>
                        <p class="card-text">${clienteArray.email}</p>
                        <p class="card-text">"${clienteArray.comentario}"</p>
                    </div>
                </div>
            `
        }) 

})

function calcularIva(producto){
    
    let productoConIVA= producto * 1.21
    
    calcularIIBB(productoConIVA)
}

calcularIva(prompt("Ingrese costo"))

function calcularIIBB(productoConIVA){

    let productoConIIBB = productoConIVA * 1.08

    calcularPrecioFinal(productoConIIBB)
}

function calcularPrecioFinal(productoConIIBB){

    let precioFinal = productoConIIBB * 1.21

    let medioDePago = prompt("Efectivo o tarjeta?").toLowerCase()
    if(medioDePago == "efectivo"){
        precioFinal = precioFinal * 0.9
    } else {
        precioFinal 
    }
    alert(`Precio final: ${precioFinal}`)
}




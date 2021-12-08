class Producto {
    constructor (nombre, costo, iibb, iva, porcentaje){
        this.nombre = nombre;
        this.costo = costo;
        this.iibb = iibb; 
        this.iva = iva;
        this.porcentaje = porcentaje;
    }
    precioFinal(){
        let final = this.costo * this.iibb * this.iva * this.porcentaje
        return final
    }
}


const producto1 = new Producto("Pañales Pampers Premium Care", 1400, 1.03, 1.21, 1.30)
const producto2 = new Producto("Pañales Huggies NaturalCare", 1500, 1.03, 1.21, 1.30)
const producto3 = new Producto("Pañales Babysec Premium", 1250, 1.03, 1.21, 1.30)

let productos = [producto1, producto2, producto3] 

console.log(productos)

for(let productosDate of productos) {
    for(let atributo in productosDate) {
        console.log(productosDate[atributo])
    }
}


console.log(productos.find(productosDate => productosDate.nombre == "Pañales Pampers Premium Care"))
console.log(productos.filter(productosDate => productosDate.iva >= 1.21))
console.log(productos.map(productosDate => productosDate = productosDate.iibb))
console.log(productos.sort((producto1, producto3) => producto1.precio - producto3.precio))

console.log(`Precio final : ${producto1.precioFinal()}`)
console.log(`Precio final : ${producto2.precioFinal()}`)
console.log(`Precio final : ${producto3.precioFinal()}`)
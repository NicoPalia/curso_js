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

console.log(producto1)

console.log(`Precio final : ${producto1.precioFinal()}`)

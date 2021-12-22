class cajaFuerte
{ constructor(tamaño, id, peso, color)
    {
        this.tamaño = tamaño  // Tamaño de la caja fuerte (pequeña, media, grande)
        this.id = id // Nombre de la caja fuerte
        this.peso = peso // Peso de la caja fuerte
        this.color = color // Color de la caja fuerte
    }
}

const caja_fuerte1 = new cajaFuerte(prompt("De que tamaño es tu Caja? (pequeña, mediana, grande)"),prompt("¿Cual es el ID?"), parseFloat(prompt("¿Cuanto pesa la caja?")), prompt("¿De que color es?"))

const caja_fuerte2 = new cajaFuerte(prompt("De que tamaño es tu Caja? (pequeña, mediana, grande)"),prompt("¿Cual es el ID?"), parseFloat(prompt("¿Cuanto pesa la caja?")), prompt("¿De que color es?"))

const caja_fuerte3 = new cajaFuerte(prompt("De que tamaño es tu Caja? (pequeña, mediana, grande)"),prompt("¿Cual es el ID?"), parseFloat(prompt("¿Cuanto pesa la caja?")), prompt("¿De que color es?"))

const caja_fuerte4 = new cajaFuerte(prompt("De que tamaño es tu Caja? (pequeña, mediana, grande)"),prompt("¿Cual es el ID?"), parseFloat(prompt("¿Cuanto pesa la caja?")), prompt("¿De que color es?"))

const caja_fuerte5 = new cajaFuerte(prompt("De que tamaño es tu Caja? (pequeña, mediana, grande)"),prompt("¿Cual es el ID?"), parseFloat(prompt("¿Cuanto pesa la caja?")), prompt("¿De que color es?"))

const caja_fuerte6 = new cajaFuerte(prompt("De que tamaño es tu Caja? (pequeña, mediana, grande)"),prompt("¿Cual es el ID?"), parseFloat(prompt("¿Cuanto pesa la caja?")), prompt("¿De que color es?"))

let caja_Array = [caja_fuerte1, caja_fuerte2, caja_fuerte3, caja_fuerte4, caja_fuerte5, caja_fuerte6]

let div = document.getElementById("CAJAFUERTE")

caja_Array.forEach((cajaFuerte, indice) => {
    div.innerHTML += `
    <div>
    <p> Indice: ${indice}
    <p> ID: ${cajaFuerte.id}"
    <p> Tamaño: ${cajaFuerte.tamaño}"
    <p> Peso: ${cajaFuerte.peso}"
    <p> Color: ${cajaFuerte.color}"
    </div>
    `
});
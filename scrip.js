let nombre = (prompt("Ingresa Un nombre"))

let apellido = (prompt("Ingresa Un Apellido"))

console.log (`${nombre} ${apellido}`)

let numero1 = parseFloat (prompt("Gastos de Transporte"))
let numero2 = parseFloat (prompt("Gastos de Luz"))
let numero3 = parseFloat (prompt("Gastos de Internet y Telefono"))
let numero4 = parseFloat (prompt("Gastos de Comida"))

let gastosTotales = numero1 + numero2 + numero3 + numero4

alert(`Hola ${nombre} ! Tus Gastos Totales son de: $` + gastosTotales )
let empleo = prompt("Tiene Empleo?")

if(empleo === "si" ) {
    console.log(alert("Aplica"))
} else {
    console.log(alert("No aplica"))
}

let monto = parseInt(prompt("Ingrese el Prestamo que desea."))

if(monto >= 1000 && monto < 10000 ){
    console.log(alert("El monto que usted ingresa es demasiado pequeño."))
} 
else if(monto > 10000 && monto <= 20000){
    console.log(alert("Usted posee 3 cuotas con interes"))
}
 else if(monto > 20000 &&  monto <= 50000) {
    console.log(alert("Usted posee 12 Cuotas sin interes"))
}
 else if(monto > 50000 ) {
    console.log(alert("Usted acaba de exceder el limite del monto que se puede solicitar"))
}
 else {
    console.log(alert ("Ingrese una cifra valida"))
}


/*let empleo = parseInt(prompt("Tiene empleo?"))

if(empleo === "si")  {
    console.log(alert("Aplica"))
}
else if(empleo === "no") {
    console.log(alert("No aplica"))
}
else {
    console.log(alert ("Respuesta invalida"))
} */
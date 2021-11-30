do{
    telefonoFijo = parseInt(prompt("Ingrese su Telefono Fijo"))
    if(telefonoFijo < 40000000 || telefonoFijo > 49999999){
        alert("Numero incorrecto, ingrese un numero de telefono valido")
    }
    } while (telefonoFijo < 40000000 || telefonoFijo > 49999999)
    
alert(`Tu Numero de Telefono es ${telefonoFijo}`)
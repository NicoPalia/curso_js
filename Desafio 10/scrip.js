$(document).ready(function () {
    $('#boton-guardar').click(function () {
        var mar = $("#Marcatxt").val();
        var col = $("#Colortxt").val();
        var tip = $("#Tipotxt").val();
        
        localStorage.setItem("Marca", mar);
        localStorage.setItem("Color", col);
        localStorage.setItem("Tipo", tip);
        
        $("#Marcatxt").val("");
        $("#Colortxt").val("");
        $("#Tipotxt").val("");
    });
});

$(document).ready(function () {
    $('#boton-cargar').click(function () {
        
        /*Obtener datos almacenados*/
        var marca = localStorage.getItem("Marca");
        var color = localStorage.getItem("Color");
        var tipo = localStorage.getItem("Tipo");
        
        /*Mostrar datos almacenados*/
        $("#Marca").append(marca)
        $("#Color").append(color)
        $("#Tipo").append(tipo) 

    });
});
$(document).ready(function () {
    $('#boton-guardar').click(function () {
        var nom = $("#nombretxt").val();
        var apel = $("#apellidotxt").val();

        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", apel);

        $("#nombretxt").val("");
        $("#apellidotxt").val("");
    });
});

$(document).ready(function () {
    $('#boton-cargar').click(function () {
        /*Obtener datos almacenados*/
        var nombre = localStorage.getItem("Nombre");
        var apellido = localStorage.getItem("Apellido");
        /*Mostrar datos almacenados*/
        $("#nombre").append(nombre)
        $("#apellido").append(apellido)
    });
});
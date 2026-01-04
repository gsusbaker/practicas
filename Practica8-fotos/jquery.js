var misFotos = ["fotos/lebron.png", "fotos/lamelo.png", "fotos/curry3.png"];

$("#botonNuevo").click(function() {
    var colorElegido = $("#selectorColor").val();
    var numeroAzar = Math.floor(Math.random() * misFotos.length);
    var fotoAzar = misFotos[numeroAzar];

    var nuevoDiv = $('<div class="elemento"></div>');
    nuevoDiv.css("background-color", colorElegido);

    nuevoDiv.html('<img src="' + fotoAzar + '">' +
                  '<button class="cambiar">Cambiar</button>' +
                  '<button class="borrar">Borrar</button>');

    $("#galeria").append(nuevoDiv);
});

$(document).on("click", ".borrar", function() {
    $(this).parent().remove();
});

$(document).on("click", ".cambiar", function() {
    var otraVezAzar = Math.floor(Math.random() * misFotos.length);
    $(this).siblings("img").attr("src", misFotos[otraVezAzar]);
});

$("#botonColor").click(function() {
    var colorNuevo = $("#selectorColor").val();
    $(".elemento").css("background-color", colorNuevo);
});

$("#botonReset").click(function() {
    $("#galeria").empty();
});
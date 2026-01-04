var misFotos = ["fotos/lebron.png", "fotos/lamelo.png", "fotos/curry3.png"];

var inputColor = document.getElementById("selectorColor");
var botonNuevo = document.getElementById("botonNuevo");
var cajaPrincipal = document.getElementById("galeria"); 
var botonFondo = document.getElementById("botonColor");
var botonReset = document.getElementById("botonReset");

botonNuevo.onclick = function() {
    var colorElegido = inputColor.value;
    var numeroAzar = Math.floor(Math.random() * misFotos.length);
    var fotoAzar = misFotos[numeroAzar];

    var nuevoDiv = document.createElement("div");
    nuevoDiv.className = "elemento";
    nuevoDiv.style.backgroundColor = colorElegido;

    nuevoDiv.innerHTML = '<img src="' + fotoAzar + '">' +
                         '<button class="cambiar">Cambiar</button>' +
                         '<button class="borrar">Borrar</button>';

    cajaPrincipal.appendChild(nuevoDiv);

    nuevoDiv.querySelector(".borrar").onclick = function() {
        nuevoDiv.remove();
    };

    nuevoDiv.querySelector(".cambiar").onclick = function() {
        var otraVezAzar = Math.floor(Math.random() * misFotos.length);
        nuevoDiv.querySelector("img").src = misFotos[otraVezAzar];
    };
};

botonFondo.onclick = function() {
    var colorNuevo = inputColor.value;
    var todosLosCuadros = document.getElementsByClassName("elemento");
    
    for (var i = 0; i < todosLosCuadros.length; i++) {
        todosLosCuadros[i].style.backgroundColor = colorNuevo;
    }
};

botonReset.onclick = function() {
    cajaPrincipal.innerHTML = "";
};
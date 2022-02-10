var btnIniciarJuego = document.querySelector("#iniciar-juego");
var btnIngresarPalabra = document.querySelector("#agregar-palabra");
var botonAgregarContinuar = document.querySelector("#btn-agregar-continuar");
var btnRetroceso = document.querySelector("#btn-cancelar");
var btnNuevoJuego = document.querySelector("#btn-nuevo-juego");
var btnDesistir = document.querySelector("#btn-desistir");

var index = document.querySelector(".index");
var agregarPalabra = document.querySelector(".ingresar-palabra");
var jugar = document.querySelector(".jugar");

//index.classList.add("oculto");
agregarPalabra.classList.add("oculto");
jugar.classList.add("oculto");

btnIniciarJuego.addEventListener("click", function (event) {
    index.classList.add("oculto");
    jugar.classList.remove("oculto");

    nuevoJuego();
});

btnIngresarPalabra.addEventListener("click", function (event) {
    index.classList.add("oculto");
    agregarPalabra.classList.remove("oculto");
});

botonAgregarContinuar.addEventListener("click", function () {

    var textArea = document.querySelector("#input-nueva-palabra");
    var palabraIngresar = textArea.value.toUpperCase();
    console.log(palabraIngresar);

    errores = validarPalabra(palabraIngresar);
    console.log(errores);

    if (errores.length == 0) {
        palabrasOcultas.push(palabraIngresar);
        console.log(palabrasOcultas)
        alert("La palabra " + palabrasOcultas[palabrasOcultas.length - 1] + " fue agregada correctamete.");
        textArea.value = "";

        agregarPalabra.classList.add("oculto");
        jugar.classList.remove("oculto");

        window.addEventListener("keypress", checkKeyPress, false);

        nuevoJuego();

    } else {
        alert(errores[0]);
    }
});

btnRetroceso.addEventListener("click", function (event) {
    agregarPalabra.classList.add("oculto");
    jugar.classList.add("oculto");
    index.classList.remove("oculto");

    window.removeEventListener("keypress", checkKeyPress, false);
});

btnNuevoJuego.addEventListener("click", function (event) {
    nuevoJuego();
});

btnDesistir.addEventListener("click", function (event) {
    agregarPalabra.classList.add("oculto");
    jugar.classList.add("oculto");
    index.classList.remove("oculto");

    window.removeEventListener("keypress", checkKeyPress, false);
}); 

var inputAuxiliar = document.querySelector("#input-teclado");

function nuevoJuego() {

    inputAuxiliar.addEventListener("input", checkKeyPress, false);

    palabraOculta = palabraOcultaAlAzar();

    letrasIngresadas = [];
    letrasActual = [];

    for (let i = 0; i < palabraOculta.length; i++) {
        letrasIngresadas[i] = "";
        letrasActual[i] = "";
    }

    letrasMalIngresadas = [];

    render();
    inputAuxiliar.value = "";

}

function palabraOcultaAlAzar() {
    var palabraAlAzar = palabrasOcultas[Math.floor(Math.random() * palabrasOcultas.length)];
    return palabraAlAzar.split('');
}

function validarPalabra(palabraIngresar) {

    errores = [];
    letraValida = soloLetras(palabraIngresar);

    if (palabraIngresar.length == 0) {
        errores.push("El campo no puede estar vacío");
    }

    if (palabraIngresar.length > 8) {
        errores.push("La palabra a ingresar debe tener max. 8 letras");
    }

    if (letraValida) {
        errores.push("El campo solo guarda letras");
    }

    return errores;
}

function soloLetras(tecla) {
    letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < tecla.length; i++) {
        const element = tecla[i];
        if (letras.indexOf(element) == -1) {
            return true;
        }
    }
}

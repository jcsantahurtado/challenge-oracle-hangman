var palabrasOcultas = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS", "GIT", "GITHUB"];

var palabraOculta = palabraOcultaAlAzar(palabrasOcultas);

var letrasMalIngresadas = [];
var contadorLetrasMalIngresadas = 0;

var letrasIngresadas = [];
var letrasActual = [];

for (let i = 0; i < palabraOculta.length; i++) {
    letrasIngresadas[i] = "";
    letrasActual[i] = "";
}


function checkKeyPress(palabra) {

    tecla = this.value.toUpperCase();
    inputAuxiliar.value = "";

    letraValida = soloLetras(tecla);

    if (letraValida) {
        alert("Solo letras...!");

    } else {

        const expresion = new RegExp(tecla, "i");

        if (!expresion.test(palabraOculta)) {
            contadorLetrasMalIngresadas += 1;

            if (!expresion.test(letrasMalIngresadas)) {
                letrasMalIngresadas.push(tecla);

                render();
            }

        } else {

            for (let i = 0; i < palabraOculta.length; i++) {
                const element = palabraOculta[i];
                var letraActual = letrasActual;
                if (element == tecla) {

                    letraActual[i] = element;

                    if (letrasIngresadas[i] == "") {
                        letrasIngresadas[i] = element;

                        render();
                    }

                    letraActual[i] = "";
                }
            }
        }
    }
}

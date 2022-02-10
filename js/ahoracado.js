var palabrasOcultas = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS", "GIT", "GITHUB"];

var palabraOculta = palabraOcultaAlAzar(palabrasOcultas);
console.log("Las letras ocultas son:", palabraOculta);

var letrasMalIngresadas = [];
var contadorLetrasMalIngresadas = 0;

var letrasIngresadas = [];
var letrasActual = [];

for (let i = 0; i < palabraOculta.length; i++) {
    letrasIngresadas[i] = "";
    letrasActual[i] = "";
}

console.log("Las letras ingresadas hasta el momentos son:", letrasIngresadas);

function checkKeyPress(palabra) {

    console.log(palabra.key);

    tecla = palabra.key.toUpperCase();

    letraValida = soloLetras(tecla);

    if (letraValida) {
        console.log("entra");
        alert("Solo letras...!");

    } else {

        const expresion = new RegExp(tecla, "i");

        if (!expresion.test(palabraOculta)) {
            console.log("La letra no está");
            contadorLetrasMalIngresadas += 1;

            if (!expresion.test(letrasMalIngresadas)) {
                letrasMalIngresadas.push(tecla);
                console.log("LETRAS MAL INGRESADAS", letrasMalIngresadas);

                render();
            }

        } else {

            console.log("La letra sí está");

            for (let i = 0; i < palabraOculta.length; i++) {
                const element = palabraOculta[i];
                var letraActual = letrasActual;
                if (element == tecla) {

                    letraActual[i] = element;
                    console.log("'ACTUAL'", letraActual);

                    if (letrasIngresadas[i] == "") {
                        letrasIngresadas[i] = element;

                        render();

                    }

                    letraActual[i] = "";
                }
            }
        }
    }

    console.log("Las letras ingresadas hasta el momentos son:", letrasIngresadas);

}

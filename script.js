/* 
-JS
  -Resolver problema y mostrarlo en un card, con un botón para pedir el prompt:
    -Se le pedirá al usuario 2 números para generar la suma, la resta, la división y la multiplicación entre ellos.
        -Se debe preguntar al usuario que operación quiere realizar antes de que ingrese los dos números a operar.
        -Si el usuario no ingresa ninguna respuesta, automáticamente informarle que deberá ingresar un dato (usar funciones y min 1 condicion, caso o ciclo)
  -Dos botones en cada página que cambien el estilo de imágenes, formulario, párrafos o títulos
  -Cambiar tamaño y color de letras y fondo de un dropdown mediante JS
  -Rellenar una tabla (5 lineas y 5 columnas) con valores introducidos mediante prompt, solicitados al pulsar un botón
*/

let operacionElegida, valor1, valor2

function pideValores() {
  operacionElegida = prompt(
    "Elija la operación a realizar:\n\t (1) para SUMA.\n\t (2) para RESTA. \n\t (3) para MULTIPLICACIÓN.\n\t (4) para DIVISIÓN."
  );
  valor1 = parseInt(prompt("Introduzca el primer operando (valor numérico)"));
  valor2 = parseInt(prompt("Introduzca el segundo operando (valor numérico)"));
}

function calcula(operacion) {
  let resultado;
  switch (operacion) {
    case "1":
      resultado = valor1 + valor2;
      operacionElegida = "SUMA"
      break;
    case "2":
      resultado = valor1 - valor2;
      operacionElegida = "RESTA"
      break;
    case "3":
      resultado = valor1 * valor2;
      operacionElegida = "MULTIPLICACIÓN"
      break;
    case "4":
      resultado = valor1 / valor2;
      operacionElegida = "DIVISIÓN"
      break;
  }
  return resultado;
}

function card() {
  pideValores();
  let res = calcula(operacionElegida);
  document.getElementById("resultado").innerHTML = `Resultado de la ${operacionElegida}<br> de ${valor1} y ${valor2}: ${res}`;
}


// BARRA DE PROGRESO

window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var scroll = document.body.scrollTop || document.documentElement.scrollTop;
  var altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progreso = (scroll / altura) * 100;
  document.getElementById("progreso").style.width = progreso + "%";
}

document.getElementById("progress").style.height = "5px";
document.getElementById("progress").style.zIndex = "-1";

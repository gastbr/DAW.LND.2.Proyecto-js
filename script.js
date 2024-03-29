/* 
Resolver problema y mostrarlo en un card, con un botón para pedir el prompt:
  Se le pedirá al usuario 2 números para generar la suma, la resta, la división y la multiplicación entre ellos.
  Se debe preguntar al usuario que operación quiere realizar antes de que ingrese los dos números a operar.
  Si el usuario no ingresa ninguna respuesta, automáticamente informarle que deberá ingresar un dato (usar funciones y min 1 condicion, caso o ciclo)
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

// Dos botones en cada página que cambien el estilo de imágenes, formulario, párrafos o títulos

function cambiaColor() {
  if (document.getElementById("body").style.background == 'rgb(230, 231, 232)') {
    document.getElementById("body").style.background = 'rgb(108, 117, 125)';
  } else {
    document.getElementById("body").style.background = 'rgb(230, 231, 232)';
  }
}

function cambiaFuente() {
  if (document.getElementById("body").style.fontFamily == 'serif') {
    document.getElementById("body").style.fontFamily = 'Segoe UI';
  } else {
    document.getElementById("body").style.fontFamily = 'serif';
  }
}

// Cambiar tamaño y color de letras y fondo de un dropdown mediante JS

document.getElementById("body").style.fontSize = '1rem';
document.getElementById("body").style.color = '#212529';
document.getElementById("dropdown").style.backgroundColor = '#71b092';

// Rellenar una tabla (5 lineas y 5 columnas) con valores introducidos mediante prompt, solicitados al pulsar un botón

function editarTabla() {
  let datos
  datos = prompt("Introduzca todos los datos (21 cadenas de texto) a introducir en la tabla, separados por una barra (/).").split("/",21)

  for (let i = 0; i < datos.length; i++) {
    document.getElementById("celda" + (i + 1)).innerHTML = datos[i]
  }
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

document.getElementById("progress").style.height = "7px";

// BS5 Alert

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger1 = document.getElementById('liveAlertBtn1')
if (alertTrigger1) {
  alertTrigger1.addEventListener('click', () => {
    appendAlert('Se ha abierto un video.', 'success')
  })
}

const alertTrigger2 = document.getElementById('liveAlertBtn2')
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    appendAlert('Se ha abierto un video.', 'success')
  })
}

const alertTrigger3 = document.getElementById('liveAlertBtn3')
if (alertTrigger3) {
  alertTrigger3.addEventListener('click', () => {
    appendAlert('Se ha abierto un video.', 'success')
  })
}

// TRIGGER SPINNER

function spinner() {
  document.getElementById('spinner').style.display = "block";
}
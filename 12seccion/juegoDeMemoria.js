/**
 * Variables ********
 */

var cartas = new Array(
    { nombre: '1', seleccion: false },
    { nombre: '2', seleccion: false },
    { nombre: '3', seleccion: false },
    { nombre: '4', seleccion: false },
    { nombre: '5', seleccion: false },
    { nombre: '6', seleccion: false },
    { nombre: '7', seleccion: false },
    { nombre: '8', seleccion: false },
    { nombre: '1', seleccion: false },
    { nombre: '2', seleccion: false },
    { nombre: '3', seleccion: false },
    { nombre: '4', seleccion: false },
    { nombre: '5', seleccion: false },
    { nombre: '6', seleccion: false },
    { nombre: '7', seleccion: false },
    { nombre: '8', seleccion: false }
)

var intentos = 0;
var jugada1 = jugada2 = "";
var identificadorJ1 = identificadorJ2 = "";
var numFichas = 16;

window.onload = function () {
    document.getElementById("iniciar").onclick = iniciarJuego;
    for (var i = 0; i < numFichas; i++) {
        document.getElementById(i.toString()).onclick = girarCarta;
    }
}

function iniciarJuego() {
    alert("Iniciar Juego!");
}

function girarCarta() {
    alert("Girar Carta!");
}
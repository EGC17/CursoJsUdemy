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
    //Modificar el tablero
    var dato = document.getElementById("juego");
    dato.style.opacity = 1;

    //Barajamos Cartas
    cartas.sort(function () { return Math.random() - 0.5 })
    console.log(cartas);

    //Asignamos los datos  a las celdas de la tabla
    for (var i = 0; i < numFichas; i++) {
        var carta = cartas[i].nombre;
        var data = document.getElementById(i.toString());
        data.dataset.valor = carta;
        console.log("dataset" + data.dataset.valor);

    }

}

function girarCarta() {
    var evento = window.event;
    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id
    //alert("Evento" + evento.target.id + " Jugada" + jugada2);

    //Seleccionamos la segunda carta
    if (jugada1 !== "") {

        //Son iguales las cartas
        if (jugada1 == jugada2 &&
            cartas[parseInt(identificadorJ2)].seleccion != true &&
            cartas[parseInt(identificadorJ1)].seleccion != true
        ) {
            cartas[parseInt(identificadorJ2)].seleccion = true;
            cartas[parseInt(identificadorJ1)].seleccion = true;

            cambiarColor(identificadorJ2, "blue", jugada2);
            limpiarVariables();
            verificar();
        } else if(identificadorJ1 != identificadorJ2){
            setTimeout(function(){
                cambiarColor(identificadorJ1,"black", "?");
                cambiarColor(identificadorJ2,"black", "?");
                limpiarVariables();
            },500)
            cambiarColor(identificadorJ2, "blue", jugada2);
        }

    } else if (jugada2 !== "void") {
        cambiarColor(identificadorJ2, "blue", jugada2);
        jugada1 = jugada2;
        identificadorJ1 = identificadorJ2;
    }
}

function cambiarColor(posicion, color, numero) {
    console.log(posicion.toString());

    document.getElementById(posicion.toString()).style.backgroundColor = color;
    document.getElementById(posicion.toString()).innerHTML = numero;
}

function limpiarVariables (){
    jugada1 = jugada2 = "";
    identificadorJ1 = identificadorJ2 = "";
}

function verificar(){
 var aciertos = 0;
 for(var i= 0; i < numFichas; i++){
    if(cartas[i].seleccion == true){
        aciertos++;
    }
 }

 if( aciertos == numFichas){
    alert("Felicidades, Finalizaste el Juego!!!");
 }
}
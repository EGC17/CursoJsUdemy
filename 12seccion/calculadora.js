window.onload = function () {
    var signos = "+-*/";
    var x = new Array();
    document.getElementById("valor").onkeypress = function (event) {
        return numeros(event);
    }
    x = document.querySelectorAll("input[type=button]");
    for (var i = 0; i < x.length; i++) {
        x[i].onclick = function () {
            let n = this.value;
            if (n == "C") {
                borrar();
            } else if (n == "<") {
                borrarCaracter();
            } else if (n == "=") {
                calcular();
            } else if (signos.indexOf(n) > -1) {
                validaSigno(n);
            } else {
                regresar(n);
            }
        }
    }



}

/**********
 * FUNCIONES
 **********/

function numeros(e) {
    let tecla = e.keyCode;
    let teclado = String.fromCharCode(tecla);
    // console.log(teclado);

    let especiales = new Array();
    especiales["backspace"] = 8;
    especiales["izquierda"] = 37;
    especiales["derecha"] = 39;
    let bandera = false;
    let numeros = "0123456789.";

    //
    bandera = especiales.includes(tecla);
    //

    if (numeros.indexOf(teclado) == -1 && bandera == false) {
        console.log(numeros.indexOf(teclado));
        console.log(bandera);
        return false;
    }

}

function borrar() {
    console.log("borrar");
}

function borrarCaracter() {
    console.log("borrar Caracter");
}

function calcular() {
    console.log("calcular");
}

function validaSigno(n) {
    console.log("valida Signo");
}

function regresar(n) {
    console.log("regresar numero");
}

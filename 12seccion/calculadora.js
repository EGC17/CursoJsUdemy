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
                validarSigno(n);
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
    document.forma.valor.value ="";
}

function borrarCaracter() {
    let valor = document.forma.valor.value;
    let nuevo = valor.substring(0,valor.length-1);
    document.forma.valor.value = nuevo;
}

function calcular2() {
    let resultado = eval(document.forma.valor.value);
    if (resultado == "Infinity") {
        document.forma.valor.value = "No podemos dividir entre cero";
    }else{
        document.forma.valor.value = resultado;
    }
}

//sin eval
function calcular() {
    let input = document.getElementById("valor");
    let expresion = input.value;

    try {
        let resultado = new Function('return ' + expresion)();

        if (!isFinite(resultado)) {
            input.value = "No podemos dividir entre cero";
        } else {
            input.value = resultado;
        }
    } catch (error) {
        input.value = "Error en la operación";
    }
}


function validarSigno(n) {
    let anterior = document.forma.valor.value;
    if(anterior != ""){
        document.getElementById("valor").value = anterior + n;
        cadena = document.getElementById("valor").value;

        let record = 0;
        let igual = 1;
        for(var a= 0; a < cadena.length ; a++){
            if(
            cadena.charAt(a) == "+"||
            cadena.charAt(a) == "-"||
            cadena.charAt(a) == "*"||
            cadena.charAt(a) == "/"||
            cadena.charAt(a) == "."
                ){
                    igual++;
                }else{
                    if(igual > record){
                        record = igual;
                    }else{
                        igual =1;
                    }
                }
            if(igual > record){
                record = igual;
            }
            if( record > 2){
                var numero = cadena.substring(0, cadena.length-1);
                document.getElementById("valor").value = numero;
                record = 0; igual = 1;
            }
        }
        
    }
}

function regresar(n) {
    let valor = document.forma.valor.value;
    let nuevo = valor+n;
    document.forma.valor.value= nuevo;
}

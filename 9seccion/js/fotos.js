window.onload = function () {
    //Detectar la imagen que se pulso
    const fotos = document.querySelector("div");

    fotos.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") {
            // Creación fondo Negro, blackout
            const fondoNegro = document.createElement("div");
            fondoNegro.id = "fondo";
            document.body.appendChild(fondoNegro);
            //Estilo del fondo negro
            fondoNegro.style.position = "absolute"; // para poder dar coordenadas x,y
            fondoNegro.style.top = 0;
            fondoNegro.style.backgroundColor = "rgba(0,0,0,0.5)"; //negro con transparencia de 50%
            fondoNegro.style.cursor = "pointer";
            //Dimensiones
            fondoNegro.style.width = window.innerWidth + "px";
            fondoNegro.style.height = window.innerHeight + "px";
            fondoNegro.style.top = fotos.scrollTop + "px";//toma la altura del div de las fotos
            fondoNegro.style.left = fotos.scrollLeft + "px";//toma la altura del div de las fotos
            console.log(fotos.scrollLeft, fotos.scrollTop);


            //Crear Imagen

            // console.log(e.target.src);
            const imagenMini = e.target.src;
            const archivo = imagenMini.substr(imagenMini.length - 10, 10);//Selecciona los ultimos 10 caracteres
            console.log(archivo);

            //Imagen Grande
            const imagenGrande = "imagenes/fondos/" + archivo;
            const imagen = document.createElement("img");
            imagen.id = "imagen";
            imagen.src = imagenGrande;
            imagen.style.display = "block";
            imagen.style.position = "absolute";

            //sincronizar , agrega la imagen grande al fondo y envia "imagen" a la funcion centrar
            imagen.addEventListener("load", function () {
                centrar(this);
                fondoNegro.appendChild(imagen);
            }, false)

            //Este evento lo que hace es quitar la imagen grande cuando se da clic sobre ella
            imagen.addEventListener("click", (e) => {
                if (fondoNegro) {
                    fondoNegro.parentNode.removeChild(fondoNegro);
                }
            }, false)

        } else {
            console.log("Lo sentimos no pulsaste una imagen");

        }

    }, false)

}

const centrar = (imagen) => {
    const xx = (window.innerWidth - imagen.width) / 2;
    const yy = (window.innerHeight - imagen.height) / 2;
    imagen.style.top = yy + "px";
    imagen.style.left = xx + "px";
    return imagen;
}
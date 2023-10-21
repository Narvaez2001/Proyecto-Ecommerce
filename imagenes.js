// Array de URLs de imágenes
var imagenes = ["./img/ramoPrincipal1.png", "./img/ramoPrincipal2.png", "./img/ramoPrincipal3.png"];
var indice = 0;

function cambiarImagen() {
    // Obtén el div de imágenes por su ID
    var divImagen = document.getElementById("imagenDiv");

    // Cambia la imagen en el div y establece el alto y ancho
    divImagen.innerHTML = `<img src="${imagenes[indice]}" alt="Imagen ${indice + 1}" style="height: 300px;" style="width="200px;">`;

    // Incrementa el índice o reinícialo si es la última imagen
    indice = (indice + 1) % imagenes.length;
}

// Llama a la función para cambiar la imagen cada 3 segundos
setInterval(cambiarImagen, 3000);
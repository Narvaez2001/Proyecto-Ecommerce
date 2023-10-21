// Definir una matriz de productos
const products = [
    // ... Productos existentes
];

// Función para cargar productos en la galería de forma aleatoria
function loadRandomProducts() {
    const productGallery = document.getElementById("product-gallery");
    // ... Código para cargar productos aleatorios (como se mostró en la respuesta anterior)
}

// Agregar un evento click al botón de actualizar productos
const refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", loadRandomProducts);

// Cargar productos aleatorios al cargar la página
loadRandomProducts();
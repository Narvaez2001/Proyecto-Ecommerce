// Datos de ejemplo para los productos
const products = [
    {
        name: "Ramo Girasol Abeja",
        description: "Pack de 2 girasoles, una abeja, con envoltura de papel coreano y lazo de cinta satinada.",
        image: "./img/ramo1.jpg",
    },
    {
        name: "Ramo Tulipan Animalito",
        description: "Pack de 1 tulipan mas una cabeza de animalito (a escoger), envuelto con papel coreano y lazo de cinta satinada.",
        image: "./img/ramo2.jpg",
    },
    {
        name: "Pack de 2 Ramos",
        description: "Contiene 1 ramo de girasol abeja más 1 ramo de rosas matizadas abeja.",
        image: "./img/ramo3.jpg",
    },
    {
        name: "Ramo de Tulipanes",
        description: "Pack de 6 tulipanes, 1 cabeza animalito y una abeja, con envoltura de papel coreano y lazo de cinta satinada.",
        image: "./img/ramo4.jpg",
    },
    {
        name: "Ramo de Tulipan Animalito",
        description: "Pack de 1 tulipan mas una cabeza de animalito (a escoger), envuelto con papel coreano y lazo de cinta satinada.",
        image: "./img/ramo5.jpg",
    },
    {
        name: "Ramo de Tulipanes",
        description: "Pack de 6 tulipanes, 1 cabeza animalito y una abeja, con envoltura de papel coreano y lazo de cinta satinada.",
        image: "./img/ramo6.jpg",
    },
    {
        name: "Ramo de Rosas matizada Abeja",
        description: "Pack de 2 rosas matizadas, 1 abeja, envuelto con papel coreano y lazo de cinta satinada. ",
        image: "./img/ramo7.jpg",
    },
    {
        name: "Ramo de Rosas matizada Abeja",
        description: "Pack de 2 rosas matizadas, 1 abeja, envuelto con papel coreano y lazo de cinta satinada.",
        image: "./img/ramo8.jpg",
    },
    {
        name: "Ramo de Rosas Matizadas",
        description: "Pack de 3 rosas matizadas, envuelto con papel coreano y lazo de cinta satinada. ",
        image: "./img/ramo9.jpg",
    },
    {
        name: "Ramo Girasol Abeja",
        description: "Pack de 1 girasol y una abeja, envuelto con papel coreano y lazo de cinta satinada. ",
        image: "./img/ramo10.jpg",
    },
    {
        name: "Cabeza Animalito",
        description: "1 cabeza de animalito a escoger",
        image: "./img/ramo11.jpg",
    },
    {
        name: "Pack de Abejas",
        description: "Pack de 4 abejas o animalito a escoger",
        image: "./img/ramo12.jpg",
    },
    {
        name: "Pack Rosa Matizada Abeja y Campanita",
        description: "Pack de 1 rosa matizada, 1 abeja y un ramo de campanita, envuelto con papel coreano y lazo de cinta satinada. ",
        image: "./img/ramo13.jpg",
    },
    {
        name: "Abeja",
        description: "Una abeja tejida con amor",
        image: "./img/ramo14.jpg",
    },
    {
        name: "Ramo Tulipan Abeja",
        description: "Pack de 1 tulipan, 1 abeja, envuelto con papel coreano y lazo de cinta satinada. ",
        image: "./img/ramo15.jpg",
    },
    {
        name: "Ramo Rosas - Helecho - Abeja",
        description: "Pack 2 rosas, 1 helecho, 1 abeja, envuelto con papel coreano y lazo de cinta satinada. ",
        image: "./img/ramo16.jpg",
    },
    {
        name: "Ramo de Tulipan Animalito",
        description: "Pack de 1 tulipan mas una cabeza de animalito (a escoger), envuelto con papel coreano y lazo de cinta satinada.",
        image: "./img/ramo17.jpg",
    },
    {
        name: "Ramo Rosa Matizada - Helecho",
        description: "Pack de 1 rosa matizada rosada, 1 helecho, envuelto con papel coreano y lazo de cinta satinada. ",
        image: "./img/ramo18.jpg",
    },
    {
        name: "Ramo Rosas - Helecho - Abeja",
        description: "Pack 2 rosas, 1 helecho, 1 abeja, envuelto con papel coreano y lazo de cinta satinada. ",
        image: "./img/ramo19.jpg",
    },
    {
        name: "Ramo Rosa Campanita",
        description: "Pack de 1 rosa matizada, 1 ramo de campanita,envuelto con papel coreano y lazo de cinta satinada. ",
        image: "./img/ramo20.jpg",
    },
    // Agregar más productos aquí
];


// Función para cargar productos en la galería de forma aleatoria
function loadRandomProducts() {
    const productGallery = document.getElementById("product-gallery");

    // Clonar la matriz de productos para no modificar la original
    const shuffledProducts = [...products];

    // Barajar los productos aleatoriamente
    for (let i = shuffledProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
    }

    const refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", loadRandomProducts);
    // Limpiar la galería antes de agregar los productos
    productGallery.innerHTML = "";

    // Iterar sobre los productos y crear tarjetas para cada uno
    shuffledProducts.forEach((product, index) => {
        if (index < 6) { // Limitar a 6 productos para 2 filas de 3 columnas
            const productCard = document.createElement("div");
            productCard.classList.add("col-md-4", "product-card");

            productCard.innerHTML = `
                <div class="card d-flex justify-content-center align-items-center">
                    <img src="${product.image}" class="card-img-top" style="width: 200px; height: 200px;" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text product-description">${product.description}</p>
                    </div>
                </div>
            `;

            productGallery.appendChild(productCard);
        }
    });
}


// Llama a la función para cargar productos aleatorios al cargar la página
loadRandomProducts();
//Función para obtener categorías de la API
async function fetchCategories() {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        const categories = await response.json();
        displayCategories(categories);
    } catch (error) {
        console.error('Error al obtener categorías:', error);
    }
}

//Función para mostrar las categorías en el DOM
function displayCategories(categories) {
    const categoryList = document.getElementById('categoryList');

    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'col-md-3';
        categoryCard.innerHTML = `
            <div class="category-card">
                <img src="${category.image}" alt="${category.name}" class="category-image">
                <h5 class="mt-3">${category.name}</h5>
            </div>
        `;
        categoryList.appendChild(categoryCard);
    });
}

//Llamar a la función al cargar la página
window.onload = fetchCategories;

const getDataButton = document.getElementById('get-data');
const dataArea = document.querySelector('#display-data');


async function fetchProduct() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price}</p>
            </div>
            `;
            dataArea.appendChild(productElement);
        });

    } catch (error){
        console.log(error);
    }
}

getDataButton.addEventListener('click', fetchProduct);





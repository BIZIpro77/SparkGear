const products = [
    { id: 1, name: "Smart Watch", price: 29.99 },
    { id: 2, name: "Wireless Earbuds", price: 19.99 },
    { id: 3, name: "Mini Projector", price: 49.99 }
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;
}

window.onload = displayProducts;
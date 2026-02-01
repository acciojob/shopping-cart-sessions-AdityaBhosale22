// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

let cartData = [];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cartData.push(product);
    renderCart();
  }
}

function renderCart() {
  cartList.innerHTML = "";
  cartData.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} `;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeFromCart(index);
    
    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
}

function removeFromCart(index) {
  cartData.splice(index, 1);
  renderCart();
}

function clearCart() {
  cartData = [];
  renderCart();
}

productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const productId = parseInt(e.target.getAttribute("data-id"));
    addToCart(productId);
  }
});

clearCartBtn.addEventListener("click", clearCart);

renderProducts();
renderCart();
import { products } from "./data.js";

const grid = document.querySelector("#product-grid");
const filters = document.querySelector("#filters");
const cartButton = document.querySelector("#cart-button");
const cartPanel = document.querySelector("#cart-panel");
const closeCart = document.querySelector("#close-cart");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const toast = document.querySelector("#toast");

let cart = JSON.parse(localStorage.getItem("nova-cart") || "{}");
let category = "All";

function money(value) {
  return "₹" + value.toLocaleString("en-IN");
}

function renderProducts() {
  const visible = category === "All"
    ? products
    : products.filter(p => p.category === category);

  grid.innerHTML = visible.map(p => `
    <article class="card">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="card-info">
        <h3>${p.name}</h3>
        <div class="meta">
          <span>${p.category}</span>
          <span class="price">${money(p.price)}</span>
        </div>
        <button class="add" data-add="${p.id}">Add to bag</button>
      </div>
    </article>
  `).join("");
}

function renderFilters() {
  const categories = ["All", ...new Set(products.map(p => p.category))];
  filters.innerHTML = categories.map(c => `
    <button class="filter ${c === category ? "active" : ""}" data-filter="${c}">${c}</button>
  `).join("");
}

function saveCart() {
  localStorage.setItem("nova-cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);
  const count = entries.reduce((sum, [, qty]) => sum + qty, 0);
  cartCount.textContent = count;

  let total = 0;
  cartItems.innerHTML = entries.length ? entries.map(([id, qty]) => {
    const p = products.find(item => item.id === Number(id));
    if (!p) return "";
    total += p.price * qty;
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}">
        <div>
          <h4>${p.name}</h4>
          <small>${money(p.price)}</small>
          <div class="qty">
            <button data-change="${id}" data-amount="-1">−</button>
            <span>${qty}</span>
            <button data-change="${id}" data-amount="1">+</button>
          </div>
        </div>
      </div>`;
  }).join("") : '<p class="empty">Your bag is empty.</p>';

  cartTotal.textContent = money(total);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  category = button.dataset.filter;
  renderFilters();
  renderProducts();
});

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const id = button.dataset.add;
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  showToast("Added to your bag!");
});

cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-change]");
  if (!button) return;
  const id = button.dataset.change;
  cart[id] = (cart[id] || 0) + Number(button.dataset.amount);
  if (cart[id] <= 0) delete cart[id];
  saveCart();
});

cartButton.addEventListener("click", () => cartPanel.classList.add("open"));
closeCart.addEventListener("click", () => cartPanel.classList.remove("open

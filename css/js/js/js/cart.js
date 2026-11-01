export function getCart() {
  return JSON.parse(localStorage.getItem("nova-cart") || "{}");
}

export function saveCart(cart) {
  localStorage.setItem("nova-cart", JSON.stringify(cart));
}

export function addToCart(cart, id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  return cart;
}

export function updateQuantity(cart, id, amount) {
  cart[id] = (cart[id] || 0) + amount;
  if (cart[id] <= 0) delete cart[id];
  saveCart(cart);
  return cart;
}

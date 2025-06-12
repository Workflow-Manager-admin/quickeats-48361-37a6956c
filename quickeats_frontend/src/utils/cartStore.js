// Simple cart store for demo (non-persistent, in-memory)
let cart = [];

// PUBLIC_INTERFACE
export function addToCart(item) {
  cart.push(item);
}

// PUBLIC_INTERFACE
export function getCart() {
  return cart;
}

// PUBLIC_INTERFACE
export function removeFromCart(index) {
  cart.splice(index, 1);
}

// PUBLIC_INTERFACE
export function clearCart() {
  cart = [];
}

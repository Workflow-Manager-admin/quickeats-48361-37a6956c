import { getCart, removeFromCart, clearCart } from '../utils/cartStore.js';

// PUBLIC_INTERFACE
export function renderCartScreen(container) {
  const cart = getCart();
  container.innerHTML = `
    <div class="qe-header">Cart</div>
    <div class="qe-cart-list">
      ${
        cart.length
          ? cart.map((item, i) => `
              <div class="qe-cart-item">
                <span>${item.name}</span>
                <span>$${item.price} x 1</span>
                <button class="qe-cart-remove-btn" data-i="${i}">🗑</button>
              </div>
          `).join('')
          : '<div class="qe-empty">Cart is empty.</div>'
      }
    </div>
    <div class="qe-cart-actions">
      <button id="qe-cart-clear" ${cart.length ? '' : 'disabled'}>Clear</button>
      <button id="qe-cart-checkout" ${cart.length ? '' : 'disabled'}>Checkout</button>
    </div>
  `;

  for (const btn of container.querySelectorAll('.qe-cart-remove-btn')) {
    btn.onclick = () => { removeFromCart(Number(btn.dataset.i)); renderCartScreen(container); };
  }
  container.querySelector('#qe-cart-clear').onclick = () => { clearCart(); renderCartScreen(container); };
  container.querySelector('#qe-cart-checkout').onclick = () =>
    alert('Checkout is not implemented in the demo.');
}

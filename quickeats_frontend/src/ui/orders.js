import { renderOrderTrackingScreen } from './orderTracking.js';

const orders = [
  {
    id: 301,
    restaurant: 'Pizza Palace',
    status: 'Out for delivery',
    items: 'Margherita Pizza, Pepperoni Pizza',
    estimatedDelivery: '15 min',
  },
  {
    id: 299,
    restaurant: 'Sushi Place',
    status: 'Delivered',
    items: 'Salmon Sushi',
    estimatedDelivery: 'Delivered 2h ago',
  },
];

// PUBLIC_INTERFACE
export function renderOrdersScreen(container) {
  container.innerHTML = `
    <div class="qe-header">My Orders</div>
    <div class="qe-orders-list">
      ${orders.map(o => `
        <div class="qe-order-card" >
          <span class="qe-order-title">${o.restaurant}</span>
          <span class="qe-order-items">${o.items}</span>
          <span class="qe-order-status">${o.status}</span>
          <span class="qe-order-time">${o.estimatedDelivery}</span>
          <button class="qe-order-track-btn" data-id="${o.id}">
            ${o.status === 'Delivered' ? 'View Receipt' : 'Track Order'}
          </button>
        </div>
      `).join('')}
    </div>
  `;
  for (const o of orders) {
    const btns = container.querySelectorAll(`.qe-order-track-btn[data-id="${o.id}"]`);
    for (const btn of btns) {
      btn.onclick = () => renderOrderTrackingScreen(container, o);
    }
  }
}

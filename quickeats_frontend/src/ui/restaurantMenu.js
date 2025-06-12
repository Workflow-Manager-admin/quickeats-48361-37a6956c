import { addToCart } from '../utils/cartStore.js';
import { renderRatingsScreen } from './ratings.js';
import { renderHomeScreen } from './home.js';

// Dummy menu items
const restaurantMenus = {
  1: [
    { id: 1, name: "Salmon Sushi", price: 12, description: "Fresh salmon fish on rice." },
    { id: 2, name: "Tuna Roll", price: 8, description: "Classic tuna roll with seaweed." },
  ],
  2: [
    { id: 3, name: "Margherita Pizza", price: 10, description: "Tomato, mozzarella, basil." },
    { id: 4, name: "Pepperoni Pizza", price: 13, description: "With spicy pepperoni." },
  ],
  3: [
    { id: 5, name: "Classic Burger", price: 9, description: "Grilled patty, lettuce, tomato." },
    { id: 6, name: "Cheese Fries", price: 5, description: "Crispy fries and cheese." },
  ],
};

// PUBLIC_INTERFACE
export function renderRestaurantMenu(container, restaurant) {
  const menu = restaurantMenus[restaurant.id] || [];
  container.innerHTML = `
    <div class="qe-back-header"><button id="qe-menu-back">&larr; Back</button>
      <span class="qe-menu-title">${restaurant.name}</span>
      <button id="qe-menu-reviews" class="qe-menu-review-btn">★ Reviews</button>
    </div>
    <div class="qe-menu-list">
      ${menu.map(item => `
        <div class="qe-menu-item" id="qe-menu-item-${item.id}">
          <span class="qe-menu-name">${item.name}</span>
          <span class="qe-menu-desc">${item.description}</span>
          <span class="qe-menu-price">$${item.price}</span>
          <button class="qe-menu-add-btn" data-id="${item.id}">Add to cart</button>
        </div>
      `).join('')}
    </div>
  `;
  container.querySelector('#qe-menu-back').onclick = () => renderHomeScreen(container);
  container.querySelector('#qe-menu-reviews').onclick = () => renderRatingsScreen(container, restaurant);

  const addBtns = container.querySelectorAll('.qe-menu-add-btn');
  for (const btn of addBtns) {
    btn.onclick = () => {
      const itemId = Number(btn.dataset.id);
      const menuItem = menu.find(i => i.id === itemId);
      addToCart({ ...menuItem, restaurantId: restaurant.id, restaurantName: restaurant.name });
      btn.textContent = 'Added!';
      setTimeout(() => { btn.textContent = 'Add to cart'; }, 700);
    };
  }
}

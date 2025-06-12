import { renderRestaurantMenu } from './restaurantMenu.js';

// Dummy data for demo purposes.
const featured = [
  { id: 1, name: "Sushi Place", image: "https://images.unsplash.com/photo-1", description: "Fresh sushi and rolls!" },
  { id: 2, name: "Pizza Palace", image: "https://images.unsplash.com/photo-2", description: "Hot pizzas, fast delivery!" },
];
const restaurants = [
  { id: 1, name: "Sushi Place", cuisine: "Japanese", rating: 4.8, location: "Downtown" },
  { id: 2, name: "Pizza Palace", cuisine: "Italian", rating: 4.6, location: "East Side" },
  { id: 3, name: "Burger Bistro", cuisine: "American", rating: 4.4, location: "West End" },
];

// PUBLIC_INTERFACE
export function renderHomeScreen(container) {
  container.innerHTML = `
    <div class="qe-home">
      <div class="qe-search-bar">
        <input id="qe-search-input" type="text" placeholder="Search restaurants, cuisine…" />
      </div>
      <div class="qe-carousel">
        ${featured.map(f => `
          <div class="qe-carousel-item">
            <img src="${f.image}" alt="${f.name}" />
            <div class="qe-carousel-caption">
              <span>${f.name}</span>
              <span>${f.description}</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="qe-rest-list" id="qe-rest-list">
        ${renderRestaurantList(restaurants)}
      </div>
    </div>
  `;
  // Restaurant click events for menu navigation
  for (const rest of restaurants) {
    const card = container.querySelector(`#qe-rest-card-${rest.id}`);
    card && (card.onclick = () => renderRestaurantMenu(container, rest));
  }
  // Search filtering
  container.querySelector('#qe-search-input').oninput = e => {
    const q = e.target.value.trim().toLowerCase();
    const filtered = restaurants.filter(r => 
      r.name.toLowerCase().includes(q) ||
      r.cuisine.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q)
    );
    container.querySelector('#qe-rest-list').innerHTML = renderRestaurantList(filtered);
    for (const rest of filtered) {
      const card = container.querySelector(`#qe-rest-card-${rest.id}`);
      card && (card.onclick = () => renderRestaurantMenu(container, rest));
    }
  };
}

function renderRestaurantList(list) {
  if (!list.length) return '<div class="qe-empty">No restaurants found.</div>';
  return list.map(rest => `
    <div class="qe-rest-card" id="qe-rest-card-${rest.id}">
      <div class="qe-rest-card-main">
        <span class="qe-rest-title">${rest.name}</span>
        <span class="qe-rest-meta">${rest.cuisine} • ${rest.location}</span>
      </div>
      <span class="qe-rest-rating">⭐ ${rest.rating}</span>
    </div>
  `).join('');
}

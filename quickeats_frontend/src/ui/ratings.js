// Shared state for reviews demo only
const reviews = {
  1: [{ name: "Alice", rating: 5, text: "Amazing sushi!" }],
  2: [{ name: "Bob", rating: 4, text: "Great pizza, fast delivery!" }],
  3: []
};

// PUBLIC_INTERFACE
export function renderRatingsScreen(container, restaurant) {
  const rid = restaurant.id;
  container.innerHTML = `
    <div class="qe-header">Reviews for ${restaurant.name}</div>
    <div class="qe-ratings-list">
    ${reviews[rid].length ? reviews[rid].map(r=>
      `<div class="qe-rating-card">
        <span class="qe-rating-user">👤 ${r.name}</span>
        <span class="qe-rating-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
        <span class="qe-rating-text">${r.text}</span>
      </div>`
    ).join('') : `<div class="qe-empty">No reviews yet</div>`}
    </div>
    <form class="qe-rating-form">
      <input type="text" id="qe-review-user" placeholder="Your Name" required />
      <select id="qe-review-rating">
        <option value="5">5 - Excellent</option>
        <option value="4">4 - Good</option>
        <option value="3">3 - Average</option>
        <option value="2">2 - Poor</option>
        <option value="1">1 - Terrible</option>
      </select>
      <textarea id="qe-review-text" placeholder="Write a review..." required></textarea>
      <button type="submit">Submit Review</button>
      <button type="button" id="qe-review-back">Back</button>
    </form>
  `;
  container.querySelector('.qe-rating-form').onsubmit = e => {
    e.preventDefault();
    const name = container.querySelector('#qe-review-user').value || 'Anon';
    const rating = Number(container.querySelector('#qe-review-rating').value);
    const text = container.querySelector('#qe-review-text').value;
    reviews[rid].push({ name, rating, text });
    renderRatingsScreen(container, restaurant);
  };
  container.querySelector('#qe-review-back').onclick = () => window.history.back();
}

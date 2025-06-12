// PUBLIC_INTERFACE
export function renderOrderTrackingScreen(container, order) {
  container.innerHTML = `
    <div class="qe-header">Order Tracking</div>
    <div class="qe-order-track-wrap">
      <span>Order for <b>${order.restaurant}</b></span>
      <span>Status: <b>${order.status}</b></span>
      <div class="qe-order-map">
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=city&zoom=12&size=400x180&maptype=roadmap
          &markers=color:orange%7Clabel:D%7Ccity" alt="Map" class="qe-track-map-img" />
      </div>
      <div class="qe-track-times">
        <span>Estimated Delivery: ${order.estimatedDelivery}</span>
      </div>
      <button id="qe-order-track-back">Back</button>
    </div>
  `;
  container.querySelector('#qe-order-track-back').onclick = () => window.history.back();
}

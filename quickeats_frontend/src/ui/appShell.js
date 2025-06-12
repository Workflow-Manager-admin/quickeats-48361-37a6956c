//
// QuickEats appShell.js: Main container UI and routing for QuickEats SPA style navigation.
//

import { renderHomeScreen } from './home.js';
import { renderOrdersScreen } from './orders.js';
import { renderCartScreen } from './cart.js';
import { renderProfileScreen } from './profile.js';

const TABS = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'orders', label: 'Orders', icon: '🧾' },
  { id: 'cart', label: 'Cart', icon: '🛒' },
  { id: 'profile', label: 'Profile', icon: '👤' },
];

// PUBLIC_INTERFACE
export function renderAppShell(selector) {
  const root = document.querySelector(selector);
  root.innerHTML = `
    <div id="qe-main-container" class="qe-theme-light">
      <div id="qe-content"></div>
      <nav id="qe-bottom-nav">${TABS.map(tab => `
        <button class="qe-nav-btn" id="nav-${tab.id}" aria-label="${tab.label}">
          <span class="qe-nav-icon">${tab.icon}</span>
          <span class="qe-nav-label">${tab.label}</span>
        </button>
      `).join('')}</nav>
    </div>
  `;
  // Initial Render
  mountTab('home');
  // Attach event listeners
  for (const tab of TABS) {
    document.getElementById(`nav-${tab.id}`).onclick = () => mountTab(tab.id);
  }
}

function mountTab(tabId) {
  const content = document.getElementById('qe-content');
  switch(tabId) {
    case 'home': renderHomeScreen(content); break;
    case 'orders': renderOrdersScreen(content); break;
    case 'cart': renderCartScreen(content); break;
    case 'profile': renderProfileScreen(content); break;
    default: content.innerHTML = '<div>Not found</div>';
  }
  highlightTab(tabId);
}

function highlightTab(activeId) {
  for (const tab of TABS) {
    const btn = document.getElementById(`nav-${tab.id}`);
    if (tab.id === activeId) {
      btn.classList.add('qe-active');
    } else {
      btn.classList.remove('qe-active');
    }
  }
}

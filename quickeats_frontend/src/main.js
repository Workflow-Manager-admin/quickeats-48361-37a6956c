import './style.css'

// PUBLIC_INTERFACE
// QuickEats Main App Bootstrapper
// This file initializes the application and controls view navigation and state.

import { renderAppShell } from './ui/appShell.js';

document.querySelector('#app').innerHTML = ''; // Clear app

renderAppShell('#app');

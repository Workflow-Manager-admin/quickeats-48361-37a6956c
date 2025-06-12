// Emulate a user login for demo
let loggedIn = false;
let username = '';

function renderProfileForm(container) {
  container.innerHTML = `
    <div class="qe-header">Profile</div>
    <div class="qe-profile-form">
      <input id="qe-prof-username" type="text" autocomplete="username" placeholder="Enter username" />
      <input id="qe-prof-password" type="password" autocomplete="current-password" placeholder="Password" />
      <div class="qe-auth-btns">
        <button id="qe-login-btn">Login</button>
        <button id="qe-signup-btn">Sign Up</button>
      </div>
    </div>
  `;
  container.querySelector('#qe-login-btn').onclick = () => {
    username = container.querySelector('#qe-prof-username').value;
    loggedIn = true;
    renderProfileScreen(container);
  };
  container.querySelector('#qe-signup-btn').onclick = () => {
    username = container.querySelector('#qe-prof-username').value;
    loggedIn = true;
    renderProfileScreen(container);
  };
}

// PUBLIC_INTERFACE
export function renderProfileScreen(container) {
  if (!loggedIn) {
    renderProfileForm(container);
  } else {
    container.innerHTML = `
      <div class="qe-header">My Profile</div>
      <div class="qe-profile-info">
         <span>Username: <b>${username}</b></span>
         <button id="qe-logout-btn">Logout</button>
      </div>
    `;
    container.querySelector('#qe-logout-btn').onclick = () => {
      loggedIn = false;
      username = '';
      renderProfileForm(container);
    };
  }
}

// DOM Elements
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginSection = document.getElementById("login-section");
const dashboardSection = document.getElementById("dashboard-section");
const userDisplay = document.getElementById("user-display");
const logoutButton = document.getElementById("logout-button");

// Local storage keys
const USER_KEY = "nido_user";

// Simulated User Database (Replace this with a real backend in the future)
const userDatabase = {
  testuser: "password123", // username: password
};

// Check if user is already logged in
function checkLogin() {
  const user = localStorage.getItem(USER_KEY);
  if (user) {
    showDashboard(user);
  }
}

// Handle login form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission reload
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate user credentials
  if (userDatabase[username] && userDatabase[username] === password) {
    localStorage.setItem(USER_KEY, username); // Store user in local storage
    showDashboard(username);
  } else {
    alert("Invalid username or password");
  }
});

// Show the dashboard section
function showDashboard(username) {
  userDisplay.textContent = username;
  loginSection.style.display = "none";
  dashboardSection.style.display = "block";
}

// Handle logout
logoutButton.addEventListener("click", () => {
  localStorage.removeItem(USER_KEY); // Remove user from local storage
  loginSection.style.display = "block";
  dashboardSection.style.display = "none";
});

// Initialize the app
checkLogin();
// Local storage keys
const USER_DATA_KEY = "nido_users";
const CURRENT_USER_KEY = "nido_current_user";

// DOM Elements
const loginUsername = document.getElementById("userName");
const loginPassword = document.getElementById("userPw");
const registerName = document.getElementById("name");
const registerEmail = document.getElementById("email");
const registerUsername = document.getElementById("user");
const registerPassword = document.getElementById("pw");

// Handle Login
function validate() {
  const username = loginUsername.value.trim();
  const password = loginPassword.value.trim();

  // Get stored users
  const users = JSON.parse(localStorage.getItem(USER_DATA_KEY)) || {};

  if (users[username] && users[username] === password) {
    // Store current user in local storage
    localStorage.setItem(CURRENT_USER_KEY, username);
    alert(`Welcome back, ${username}!`);
  } else {
    alert("Invalid username or password.");
  }

  // Clear input fields
  loginUsername.value = "";
  loginPassword.value = "";
}

// Handle Registration
function register() {
  event.preventDefault();
  const name = registerName.value.trim();
  const email = registerEmail.value.trim();
  const username = registerUsername.value.trim();
  const password = registerPassword.value.trim();

  // Get existing users
  const users = JSON.parse(localStorage.getItem(USER_DATA_KEY)) || {};

  // Check if username already exists
  if (users[username]) {
    alert("Username already exists. Please choose another.");
    return;
  }

  // Save new user
  users[username] = password;
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(users));
  alert(`Account created successfully for ${name}!`);

  // Clear input fields
  registerName.value = "";
  registerEmail.value = "";
  registerUsername.value = "";
  registerPassword.value = "";
}

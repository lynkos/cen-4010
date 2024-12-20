// Local storage keys
const USERS_KEY = "nido_users";

// Debug helper function to print all users
function logCurrentUsers() {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || {};
  console.log("Current users in local storage:", users);
}

// SQL Injection
function sanitizeInput(input) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;',
    '{': '&#123;',
    '}': '&#125;',
    '(': '&#40;',
    ')': '&#41;',
    ';': '&#59;'
  };

  const reg = /[&<>"'/`=(){};]/g;
  return input.replace(reg, (match) => map[match]);
}

// Register a new user
function register() {
  const name = sanitizeInput(document.getElementById("name").value.trim());
  const email = sanitizeInput(document.getElementById("email").value.trim());
  const username = sanitizeInput(document.getElementById("user").value.trim());
  const password = sanitizeInput(document.getElementById("pw").value.trim());

  // Validate fields
  if (!name || !email || !username || !password) {
    alert("All fields are required.");
    return;
  }

  // Get existing users
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || {};
  
  // Check if username already exists
  if (users[username]) {
    alert("Username already exists. Please choose another.");
    return;
  }

  // Save new user
  users[username] = { name, email, password};
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  alert(`Account created successfully for ${name}!`);

  sessionStorage.setItem("nido_current_user", username);
  window.location.href = "index.html";

  // Log final state of users after registration
  logCurrentUsers();
}

// Validate user login
function validate(event) {
  if (event) event.preventDefault();
  
  const username = sanitizeInput(document.getElementById("userName").value.trim());
  const password = sanitizeInput(document.getElementById("userPw").value.trim());

  // Get users from local storage
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || {};

  if (users[username] && users[username].password === password) {
    // Set the current user in sessionStorage
    sessionStorage.setItem("nido_current_user", username);

    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }

  // Clear login fields
  document.getElementById("userName").value = "";
  document.getElementById("userPw").value = "";
}

// Add event listener for the Enter key
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // Determine which tab is active (Login or Register)
    if (document.getElementById("tab-1").checked) {
      validate();
    } else if (document.getElementById("tab-2").checked) {
      register();
    }
  }
});

function initializeRoomCustomization() {
  if (!localStorage.getItem("bedrooms")) {
      localStorage.setItem("bedrooms", "0"); // Default bedrooms to 0
  }
  if (!localStorage.getItem("bathrooms")) {
      localStorage.setItem("bathrooms", "0"); // Default bathrooms to 0
  }
}

// Call this function when a new user logs in
function handleLogin(username) {
  sessionStorage.setItem("nido_current_user", username); // Set the current user
  initializeRoomCustomization(); // Initialize room customization
  const currentPath = window.location.pathname;
  if (currentPath.includes("/HTML/")) {
    window.location.href = "index.html"; // Redirect to the dashboard
  } else {
    window.location.href = "./HTML/index.html"; // Redirect to the dashboard
  }
}

function updateAuthButton() {
  const currentUser = sessionStorage.getItem("nido_current_user");
  const authButton = document.getElementById("auth-button");

  if (authButton) {
    if (currentUser) {
      authButton.innerHTML = "<i class='fa fa-sign-out'></i> Logout";
      authButton.href = "#";
      authButton.onclick = handleAuth;
    } else {
      authButton.innerHTML = "<i class='fa fa-sign-in'></i> Login";
      const currentPath = window.location.pathname;
      if (currentPath.includes("/HTML/")) {
        authButton.href = "login.html";
      } else {
        authButton.href = "./HTML/login.html";
      }
      authButton.onclick = null;
    }
  }
}

function handleAuth() {
  const currentUser = sessionStorage.getItem("nido_current_user");

  if (currentUser) {
    // Remove user from local memory
    sessionStorage.removeItem("nido_current_user");
    const currentPath = window.location.pathname;
    if (currentPath.includes("/HTML/")) {
      window.location.href = "logout.html";
    } else {
      window.location.href = "./HTML/logout.html";
    }
  }
}

function handleLogout() {
  sessionStorage.removeItem("nido_current_user");
  // localStorage.removeItem("bedrooms"); 
  // localStorage.removeItem("bathrooms"); 
  const currentPath = window.location.pathname;
  if (currentPath.includes("/HTML/")) {
    window.location.href = "login.html";
  } else {
    window.location.href = "./HTML/login.html";
  }
}

window.onload = function() {
  updateAuthButton();
}
window.register = register;
window.validate = validate;

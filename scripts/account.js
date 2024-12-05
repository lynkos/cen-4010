// Local storage keys
const USERS_KEY = "nido_users";

// Debug helper function to print all users
function logCurrentUsers() {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || {};
  console.log("Current users in local storage:", users);
}

// Register a new user
function register() {
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("user").value.trim();
  const password = document.getElementById("pw").value.trim();

  console.log("Register button clicked with the following inputs:", { name, email, username, password });

  // Validate fields
  if (!name || !email || !username || !password) {
    console.log("Registration failed: Missing required fields");
    alert("All fields are required.");
    return;
  }

  // Get existing users
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || {};
  console.log("Existing users before registration:", users);

  // Check if username already exists
  if (users[username]) {
    console.log(`Registration failed: Username "${username}" already exists.`);
    alert("Username already exists. Please choose another.");
    return;
  }

  // Save new user
  users[username] = {
    name,
    email,
    password
  };
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  console.log(`User "${username}" registered successfully. Updated users:`, users);
  alert(`Account created successfully for ${name}!`);

  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("user").value = "";
  document.getElementById("pw").value = "";

  // Log final state of users after registration
  logCurrentUsers();
}

// Validate user login
function validate() {
  console.log("Validate function called for login");

  const username = document.getElementById("userName").value.trim();
  const password = document.getElementById("userPw").value.trim();

  console.log("Login attempted with:", { username, password });

  // Get users from local storage
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || {};
  console.log("Current users at login:", users);

  if (users[username] && users[username].password === password) {
    console.log(`Login success for user: "${username}"`);
    alert(`Welcome back, ${username}!`);

    // Set the current user in localStorage if you want session persistence
    localStorage.setItem("nido_current_user", username);

    // Redirect the user to the target page
    // Update the filename below if your new page is named differently
    window.location.href = "../index.html";
  } else {
    console.log(`Login failed for username: "${username}" with given password.`);
    alert("Invalid username or password.");
  }


  // Clear login fields
  document.getElementById("userName").value = "";
  document.getElementById("userPw").value = "";
}

// Clear login fields after attempt
document.getElementById("userName").value = "";
document.getElementById("userPw").value = "";

// Attach functions to global scope
window.register = register;
window.validate = validate;

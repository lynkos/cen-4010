document.addEventListener("DOMContentLoaded", () => {
  const currentUser = sessionStorage.getItem("nido_current_user");
  const welcomeMessage = document.querySelector("#welcome-message");

  if (welcomeMessage) {
    if (currentUser) {
      welcomeMessage.textContent = `Welcome to Nido, ${currentUser}!`; // Personalized message
    } else {
      welcomeMessage.textContent = "Welcome to Nido!"; // Default message
    }
  } else {
    console.error("Welcome message element not found in the DOM.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = sessionStorage.getItem("nido_current_user");
  const tasksContainer = document.querySelector("#tasks-container");

  if (!currentUser) {
    // Hide the tasks container if not logged in
    if (tasksContainer) {
      tasksContainer.style.display = "none";

      alert("You must be logged in to access this page.");
      window.location.href = "HTML/login.html";
    }
    return;
  }

  // Show the tasks container if logged in
  if (tasksContainer) {
    tasksContainer.style.display = "block";
  }

  // Check if the tasks section is already initialized
  if (!tasksContainer.dataset.initialized) {
    tasksContainer.dataset.initialized = "true"; // Mark as initialized
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = sessionStorage.getItem("nido_current_user");
  const maintenanceLink = document.querySelector('.menu__link[href="history.html"], .menu__link[href="HTML/history.html"]');
  const customizationLink = document.querySelector('.menu__link[href="roomcustomization.html"], .menu__link[href="HTML/roomcustomization.html"]');
  const cartLink = document.querySelector('.menu__link[href="cart.html"], .menu__link[href="HTML/cart.html"]');
  const profileLink = document.querySelector('.menu__link[href="userpage.html"], .menu__link[href="HTML/userpage.html"]');

  if (!currentUser) {
    if (maintenanceLink) {
      maintenanceLink.classList.add("disabled");
      maintenanceLink.href = "#";
      maintenanceLink.style.cursor = "not-allowed"; // Change cursor to indicate unavailability
      maintenanceLink.style.opacity = "0.5"; // Optional: visually indicate it's disabled
      maintenanceLink.onclick = () => alert("Please log in to access Maintenance History.");
    }

    if (customizationLink) {
      customizationLink.classList.add("disabled");
      customizationLink.href = "#";
      customizationLink.style.cursor = "not-allowed"; // Change cursor to indicate unavailability
      customizationLink.style.opacity = "0.5"; // Optional: visually indicate it's disabled
      customizationLink.onclick = () => alert("Please log in to access Room Customization.");
    }

    if (cartLink) {
      cartLink.classList.add("disabled");
      cartLink.href = "#";
      cartLink.style.cursor = "not-allowed"; // Change cursor to indicate unavailability
      cartLink.style.opacity = "0.5"; // Optional: visually indicate it's disabled
      cartLink.onclick = () => alert("Please log in to access Maintenance History.");
    }

    if (profileLink) {
      profileLink.classList.add("disabled");
      profileLink.href = "#";
      profileLink.style.cursor = "not-allowed"; // Change cursor to indicate unavailability
      profileLink.style.opacity = "0.5"; // Optional: visually indicate it's disabled
      profileLink.onclick = () => alert("Please log in to access Maintenance History.");
    }
  }
});

  document.addEventListener('DOMContentLoaded', () => {
    const roomConfigurationContainer = document.getElementById('room-configuration');
    const currentUser = sessionStorage.getItem("nido_current_user");

    if (roomConfigurationContainer) {
      if (currentUser) {
          // If a user is logged in, display Room Configuration
          roomConfigurationContainer.style.display = "block";

          // Retrieve room configuration from localStorage
          const bedrooms = localStorage.getItem("bedrooms") || 0;
          const bathrooms = localStorage.getItem("bathrooms") || 0;

          // Populate the Room Configuration
          roomConfigurationContainer.innerHTML = `
              <h2>Saved Room Configuration</h2>
              <p>Bedrooms: ${bedrooms}</p>
              <p>Bathrooms: ${bathrooms}</p>
          `;
      } else {
          // If no user is logged in, hide Room Configuration
          roomConfigurationContainer.style.display = "none";
      }
  }
});
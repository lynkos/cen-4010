/**
 * @class Model
 * Manages the room configuration data
 */
document.addEventListener("DOMContentLoaded", () => {
    const currentUser = sessionStorage.getItem("nido_current_user");
  
    if (!currentUser) {
      
      alert("You must be logged in to access this page.");
      window.location.href = "index.html";
    }
  });
   
class Model {
    constructor() {
        // Initialize room counts from localStorage or default to 0
        this.bedrooms = parseInt(localStorage.getItem('bedrooms')) || 0;
        this.bathrooms = parseInt(localStorage.getItem('bathrooms')) || 0;
    }

    increaseBedrooms() {
        this.bedrooms++;
        localStorage.setItem('bedrooms', this.bedrooms);
        this.updateDisplay();
    }

    decreaseBedrooms() {
        if (this.bedrooms > 0) {
            this.bedrooms--;
            localStorage.setItem('bedrooms', this.bedrooms);
            this.updateDisplay();
        }
    }

    increaseBathrooms() {
        this.bathrooms++;
        localStorage.setItem('bathrooms', this.bathrooms);
        this.updateDisplay();
    }

    decreaseBathrooms() {
        if (this.bathrooms > 0) {
            this.bathrooms--;
            localStorage.setItem('bathrooms', this.bathrooms);
            this.updateDisplay();
        }
    }

    updateDisplay() {
        const bedroomsCount = document.getElementById('bedrooms-count');
        const bathroomsCount = document.getElementById('bathrooms-count');

         if (bedroomsCount && bathroomsCount) {
           bedroomsCount.textContent = this.bedrooms;
           bathroomsCount.textContent = this.bathrooms;
    }
    }

    saveConfiguration() {
        localStorage.setItem("bedrooms", this.bedrooms);
        localStorage.setItem("bathrooms", this.bathrooms);
        window.location.href = './index.html';
    }
}

// Initialize the model
const model = new Model();

// Add event listeners once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize display
    model.updateDisplay();

    // Bedroom buttons
    document.querySelector('[data-type="bedrooms"][data-action="increase"]')
        .addEventListener('click', () => model.increaseBedrooms());
    document.querySelector('[data-type="bedrooms"][data-action="decrease"]')
        .addEventListener('click', () => model.decreaseBedrooms());

    // Bathroom buttons
    document.querySelector('[data-type="bathrooms"][data-action="increase"]')
        .addEventListener('click', () => model.increaseBathrooms());
    document.querySelector('[data-type="bathrooms"][data-action="decrease"]')
        .addEventListener('click', () => model.decreaseBathrooms());

    // Save button
    document.querySelector('.save-button')
        .addEventListener('click', () => {
            if (confirm('Save this house configuration?')) {
                model.saveConfiguration();
            }
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const roomConfigurationContainer = document.getElementById('room-configuration');

    // Retrieve room configuration from localStorage
    const bedrooms = localStorage.getItem('bedrooms');
    const bathrooms = localStorage.getItem('bathrooms');

    if (bedrooms !== null && bathrooms !== null) {
        // Display the saved configuration
        roomConfigurationContainer.innerHTML = `
            <h2>Saved Room Configuration</h2>
            <p>Bedrooms: ${bedrooms}</p>
            <p>Bathrooms: ${bathrooms}</p>
        `;
    } else {
        // Display default message if no configuration is saved
        roomConfigurationContainer.innerHTML = '<p>No room configuration saved yet.</p>';
    }
});


/**
 * @class Model
 * Manages the user profile data
 */
class Model {
    constructor() {
        this.userProfile = {
            username: localStorage.getItem('user') || 'Not set',
            email: localStorage.getItem('email') || 'Not set',
            address: localStorage.getItem('address') || 'Not set',
            phone: localStorage.getItem('phone') || 'Not set'
        };
    }

    bindProfileChanged(callback) {
        this.onProfileChanged = callback;
    }

    _commit(profile) {
        this.onProfileChanged(profile);
    }

    updateProfile(field, value) {
        if (field === 'username' || field === 'email' || field === 'address' || field === 'phone') {
            this.userProfile[field] = value;
            localStorage.setItem(field === 'username' ? 'user' : field, value);
            this._commit(this.userProfile);
        }
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('pw');
        localStorage.removeItem('email');
        localStorage.removeItem('address');
        localStorage.removeItem('phone');
        window.location.href = './logout.html';
    }
}

/**
 * @class View
 * Visual representation of the profile
 */
class View {
    constructor() {
        this.app = this.getElement('#root');
        this.profileSection = this.getElement('.profile-container');
        this.logoutButton = this.getElement('.logout-button');
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    getElement(selector) {
        return document.querySelector(selector);
    }

    displayProfile(profile) {
        console.log('Displaying profile:', profile);
        
        document.getElementById('profile-username').textContent = profile.username;
        document.getElementById('profile-email').textContent = profile.email;
        document.getElementById('profile-address').textContent = profile.address;
        document.getElementById('profile-phone').textContent = profile.phone;
        
        const avatarLetter = document.getElementById('avatar-letter');
        avatarLetter.textContent = profile.username ? profile.username[0].toUpperCase() : '?';
    }

    bindLogout(handler) {
        this.logoutButton.addEventListener('click', handler);
    }

    bindEditField(handler) {
        this.profileSection.addEventListener('click', event => {
            if (event.target.className === 'edit-button') {
                const field = event.target.dataset.field;
                const currentValue = document.getElementById(`profile-${field}`).textContent;
                
                let newValue;
                if (field === 'phone') {
                    newValue = prompt(`Enter new ${field} number:`, currentValue === 'Not set' ? '' : currentValue);
                } else {
                    newValue = prompt(`Enter new ${field}:`, currentValue === 'Not set' ? '' : currentValue);
                }
                
                if (newValue && newValue !== currentValue) {
                    handler(field, newValue);
                }
            }
        });
    }
}

/**
 * @class Controller
 * Links the user input and the view output
 */
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.bindProfileChanged(this.onProfileChanged);
        
        this.view.bindLogout(this.handleLogout);
        this.view.bindEditField(this.handleEditField);

        this.onProfileChanged(this.model.userProfile);
    }

    onProfileChanged = profile => {
        this.view.displayProfile(profile);
    }

    handleLogout = () => {
        if (confirm('Are you sure you want to logout?')) {
            this.model.logout();
        }
    }

    handleEditField = (field, value) => {
        this.model.updateProfile(field, value);
    }
}

// Initialize the app
const app = new Controller(new Model(), new View());

/**
 * @class Model
 *
 * Manages the data of the application.
 */


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

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = sessionStorage.getItem("nido_current_user");
  const tasksContainer = document.querySelector("#tasks-container");

  if (!currentUser) {
    // Hide the tasks container if not logged in
    if (tasksContainer) {
      tasksContainer.style.display = "none";
    }
    return;
  }

  // Show the tasks container if logged in
  if (tasksContainer) {
    tasksContainer.style.display = "block";
  }

  // Check if the tasks section is already initialized
  if (!tasksContainer.dataset.initialized) {
    const app = new Controller(new Model(), new View());
    tasksContainer.dataset.initialized = "true"; // Mark as initialized
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = sessionStorage.getItem("nido_current_user");
  const cartButton = document.getElementById("cart-button");

  if (!currentUser) {
    // Hide the cart button or disable it
    cartButton.href = "#"; // Remove cart functionality
    cartButton.onclick = () => {
      alert("Please log in to access the shopping cart.");
=======
    // Change the onclick to something else, e.g., a profile page
    userBtn.onclick = () => {
      // If you have a profile page or dashboard, redirect there
      // Otherwise, just remove the onclick to prevent going to login again
      window.location.href = "./profile.html";
>>>>>>> b9b2d5856b34de1d4e8f50e4fb5b8ef6086a4e18
    };
    cartButton.style.cursor = "not-allowed"; // Change cursor to indicate unavailability
    cartButton.style.opacity = "0.5"; // Optional: visually indicate it's disabled
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const currentUser = sessionStorage.getItem("nido_current_user");

  const maintenanceLink = document.querySelector('.menu__link[href="history.html"]');
  const customizationLink = document.querySelector('.menu__link[href="roomcustomization.html"]');

  if (!currentUser) {
    maintenanceLink.classList.add("disabled");
    maintenanceLink.href = "#";
    customizationLink.classList.add("disabled");
    customizationLink.href = "#";

    maintenanceLink.onclick = () => alert("Please log in to access Maintenance History.");
    customizationLink.onclick = () => alert("Please log in to access Room Customization.");
  }
}); 

class Model {
    constructor() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || []
    }
  
    bindTodoListChanged(callback) {
      this.onTodoListChanged = callback
    }
  
    _commit(todos) {
      this.onTodoListChanged(todos)
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  
    addTodo(todoText) {
      const todo = {
        id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
        text: todoText,
        complete: false,
      }
  
      this.todos.push(todo)
  
      this._commit(this.todos)
    }
  
    editTodo(id, updatedText) {
      this.todos = this.todos.map(todo =>
        todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo
      )
  
      this._commit(this.todos)
    }
  
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
  
      this._commit(this.todos)
    }
  
    toggleTodo(id) {
      this.todos = this.todos.map(todo =>
        todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo
      )
  
      this._commit(this.todos)
    }
  }

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

  
  /**
   * @class View
   *
   * Visual representation of the model.
   */
  class View {
    constructor() {
      this.app = this.getElement("#root");
  
      // Clear existing tasks in the container
      this.app.innerHTML = "";
  
      this.form = this.createElement("form");
      this.input = this.createElement("input");
      this.input.type = "text";
      this.input.placeholder = "Add Task";
      this.input.name = "todo";
  
      this.submitButton = this.createElement("button");
      this.submitButton.textContent = "Submit";
      this.form.append(this.input, this.submitButton);
  
      this.title = this.createElement("h1");
      this.title.textContent = "Tasks";
  
      this.todoList = this.createElement("ul", "todo-list");
      this.app.append(this.title, this.form, this.todoList);
  
      this._temporaryTodoText = "";
      this._initLocalListeners();
    }
  
    get _todoText() {
      return this.input.value;
    }
  
    _resetInput() {
      this.input.value = "";
    }
  
    createElement(tag, className) {
      const element = document.createElement(tag);
      if (className) element.classList.add(className);
      return element;
    }
  
    getElement(selector) {
      const element = document.querySelector(selector);
      return element;
    }
  
    displayTodos(todos) {
      while (this.todoList.firstChild) {
        this.todoList.removeChild(this.todoList.firstChild);
      }
  
      if (todos.length === 0) {
        const p = this.createElement("p");
        p.textContent = "Nothing to do! Add a task?";
        this.todoList.append(p);
      } else {
        todos.forEach((todo) => {
          const li = this.createElement("li");
          li.id = todo.id;
  
          const checkbox = this.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = todo.complete;
  
          const span = this.createElement("span");
          span.contentEditable = true;
          span.classList.add("editable");
  
          if (todo.complete) {
            const strike = this.createElement("s");
            strike.textContent = todo.text;
            span.append(strike);
          } else {
            span.textContent = todo.text;
          }
  
          const deleteButton = this.createElement("button", "delete");
          deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
          li.append(checkbox, span, deleteButton);
  
          this.todoList.append(li);
        });
      }
    }
  
    _initLocalListeners() {
      this.todoList.addEventListener("input", (event) => {
        if (event.target.className === "editable") {
          this._temporaryTodoText = event.target.innerText;
        }
      });
    }
  
    bindAddTodo(handler) {
      this.form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (this._todoText) {
          handler(this._todoText);
          this._resetInput();
        }
      });
    }
  }
  
  /**
   * @class Controller
   *
   * Links the user input and the view output.
   *
   * @param model
   * @param view
   */
  class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
  
      // Explicit this binding
      this.model.bindTodoListChanged(this.onTodoListChanged)
      this.view.bindAddTodo(this.handleAddTodo)
      this.view.bindEditTodo(this.handleEditTodo)
      this.view.bindDeleteTodo(this.handleDeleteTodo)
      this.view.bindToggleTodo(this.handleToggleTodo)
  
      // Display initial todos
      this.onTodoListChanged(this.model.todos)
    }
  
    onTodoListChanged = todos => {
      this.view.displayTodos(todos)
    }
  
    handleAddTodo = todoText => {
      this.model.addTodo(todoText)
    }
  
    handleEditTodo = (id, todoText) => {
      this.model.editTodo(id, todoText)
    }
  
    handleDeleteTodo = id => {
      this.model.deleteTodo(id)
    }
  
    handleToggleTodo = id => {
      this.model.toggleTodo(id)
    }
  }
  
  const app = new Controller(new Model(), new View())
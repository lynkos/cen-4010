document.addEventListener("DOMContentLoaded", () => {
  const currentUser = sessionStorage.getItem("nido_current_user");

  // Redirect if user is not logged in
  if (!currentUser) {
    alert("You must be logged in to access this page.");
    window.location.href = "login.html";
    return;
  }

  // Elements and variables
  const recordForm = document.getElementById("record-form");
  const recordList = document.getElementById("record-list");
  let records = JSON.parse(localStorage.getItem("maintenanceRecords")) || [];
  let editIndex = -1;

  // Render records in the table
  const renderRecords = () => {
    recordList.innerHTML = records
      .map(
        (record, index) => `
          <tr>
            <td>${record.name}</td>
            <td>${record.quantity}</td>
            <td>${record.date}</td>
            <td><i class="fa fa-edit" title="Edit" onclick="editRecord(${index})"></i></td>
            <td>
              <button class="deleteButton" onclick="deleteRecord(${index})">
                <i class="fa fa-trash" title="Delete"></i>
              </button>
            </td>
          </tr>`
      )
      .join("");
  };

  // Handle record form submission
  recordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const quantity = document.getElementById("quantity").value;
    const date = document.getElementById("date").value;

    if (editIndex >= 0) {
      // Update existing record
      records[editIndex] = { name, quantity, date };
      editIndex = -1;
    } else {
      // Add new record
      records.push({ name, quantity, date });
    }

    // Save records and refresh table
    localStorage.setItem("maintenanceRecords", JSON.stringify(records));
    renderRecords();
    recordForm.reset();

    // Send notification 10 seconds after adding a record
    setTimeout(() => {
      sendNotification("Maintenance Record Added", `You added "${name}" to your maintenance history.`);
    }, 10000);
  });

  // Handle edit button click
  window.editRecord = (index) => {
    const record = records[index];
    document.getElementById("name").value = record.name;
    document.getElementById("quantity").value = record.quantity;
    document.getElementById("date").value = record.date;
    editIndex = index;
  };

  // Handle delete button click
  window.deleteRecord = (index) => {
    const deleteButton = document.querySelectorAll(".deleteButton")[index];
    deleteButton.innerHTML = `
      <i id="yesBtn" onclick="confirmDelete(${index})" class="fa fa-check" title="Confirm"></i>
      <i id="noBtn" onclick="resetDelete()" class="fa fa-times" title="Cancel"></i>
    `;
  };

  // Confirm deletion
  window.confirmDelete = (index) => {
    records.splice(index, 1); // Remove the record
    localStorage.setItem("maintenanceRecords", JSON.stringify(records)); // Update localStorage
    renderRecords(); // Refresh the table
  };

  // Reset delete buttons to original state
  window.resetDelete = () => {
    renderRecords(); // Re-render records to reset the delete buttons
  };

  // Request notification permission
  const requestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.warn("Notification permission denied.");
        }
      });
    } else {
      console.error("This browser does not support notifications.");
    }
  };

  // Send notification
  const sendNotification = (title, body) => {
    if ("Notification" in window && Notification.permission === "granted") {
      const notification = new Notification(title, {
        body,
        icon: "../assets/images/notification-icon.png", // Replace with your icon
      });

      // Auto-close notification after 5 seconds
      setTimeout(() => notification.close(), 5000);
    }
  };

  // Request notification permission on page load
  if (Notification.permission === "default") {
    requestNotificationPermission();
  }

  // Initial rendering of records
  renderRecords();
});

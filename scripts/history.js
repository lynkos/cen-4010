const recordForm = document.getElementById('record-form');
const nameInput = document.getElementById('name');
const quantityInput = document.getElementById('quantity');
const dateInput = document.getElementById('date');
const recordList = document.getElementById('record-list');
const editIndexInput = document.getElementById('edit-index');
const submitButton = document.getElementById('submit');

// Initialize records from local storage
let records = JSON.parse(localStorage.getItem('records')) || [];
console.log(records.length);

// Display records
function displayRecords() {
  recordList.innerHTML = '';
  console.log(records.length);
  if (records.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="5" style="text-align:center;color:red;">No Record Found</td>`;
    recordList.appendChild(row);
  } else {
    records.forEach((record, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
                    <td>${record.name}</td>
                    <td>${record.quantity}</td>
                    <td>${record.date}</td>
                    <td><button onclick="editRecord(${index})">Edit</button></td>
                    <td class="deleteButton"><button onclick="deleteRecord(${index})">Delete</button></td>
                    `;
      recordList.appendChild(row);
    });
  }
}

// Add or Update a record
recordForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = nameInput.value;
  const quantity = quantityInput.value;
  const date = dateInput.value;
  const editIndex = parseInt(editIndexInput.value);

  if (name && quantity && date) {
    if (editIndex === -1) {
      // Add a new record
      records.push({ name, quantity, date });
    } else {
      // Update an existing record
      records[editIndex] = { name, quantity, date };
      editIndexInput.value = -1;
    }

    localStorage.setItem('records', JSON.stringify(records));
    nameInput.value = '';
    quantityInput.value = '';
    dateInput.value = '';
    submitButton.textContent = 'Add Record';
    displayRecords();
  }
});

// Edit a record
function editRecord(index) {
  const recordToEdit = records[index];
  nameInput.value = recordToEdit.name;
  quantityInput.value = recordToEdit.quantity;
  dateInput.value = recordToEdit.date;
  editIndexInput.value = index;
  submitButton.textContent = 'Update Record';
}

// Delete a record
function deleteRecord(index) {
  displayRecords();
  let delBtn = document.querySelectorAll('.deleteButton');
  console.log(delBtn);
  delBtn[
    index
  ].innerHTML = `<i id="yesBtn" onclick="confirmDelete(${index})" class="fa-solid fa-check"></i><i id="noBtn" onclick="resetDelete()" class="fa-solid fa-xmark"></i>`;
}

// Confirm delete
function confirmDelete(index) {
  records.splice(index, 1);
  localStorage.setItem('records', JSON.stringify(records));
  displayRecords();
}

// Reset delete
function resetDelete() {
  displayRecords();
}

// Initial display
displayRecords();
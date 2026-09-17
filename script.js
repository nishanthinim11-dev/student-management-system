const form = document.querySelector("form");
const table = document.querySelector("table");
const searchInput = document.getElementById("searchInput");

let students = JSON.parse(localStorage.getItem("students")) || [];

// First time: existing students save
if (students.length === 0) {
  const rows = table.querySelectorAll("tr");

  for (let i = 1; i < rows.length; i++) {
    students.push({
      name: rows[i].cells[0].textContent,
      department: rows[i].cells[1].textContent,
      rollNumber: rows[i].cells[2].textContent
    });
  }

  localStorage.setItem("students", JSON.stringify(students));
}

function displayStudents() {
  // Remove old rows
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  students.forEach(function(student) {
    const row = table.insertRow(-1);

    row.insertCell(0).textContent = student.name;
    row.insertCell(1).textContent = student.department;
    row.insertCell(2).textContent = student.rollNumber;

    const actionCell = row.insertCell(3);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
      editStudent(this);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteStudent(this);
    };

    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
  });
}

// Add Student
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const inputs = form.querySelectorAll("input");

  const name = inputs[0].value.trim();
  const department = inputs[1].value.trim();
  const rollNumber = inputs[2].value.trim();

  if (name === "" || department === "" || rollNumber === "") {
    alert("Please fill all fields!");
    return;
  }

  students.push({
    name: name,
    department: department,
    rollNumber: rollNumber
  });

  localStorage.setItem("students", JSON.stringify(students));

  displayStudents();
  form.reset();
});

// Delete Student
function deleteStudent(button) {
  const row = button.parentElement.parentElement;
  const index = row.rowIndex - 1;

  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));

  displayStudents();
}

// Edit Student
function editStudent(button) {
  const row = button.parentElement.parentElement;
  const index = row.rowIndex - 1;

  const name = prompt("Enter student name:", students[index].name);
  const department = prompt("Enter department:", students[index].department);
  const rollNumber = prompt("Enter roll number:", students[index].rollNumber);

  if (name && department && rollNumber) {
    students[index] = {
      name: name,
      department: department,
      rollNumber: rollNumber
    };

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
  }
}

// Search Student
searchInput.addEventListener("keyup", function() {
  const filter = this.value.toLowerCase();
  const rows = table.querySelectorAll("tr");

  for (let i = 1; i < rows.length; i++) {
    const text = rows[i].textContent.toLowerCase();

    if (text.includes(filter)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});

// Display students when page loads
displayStudents();
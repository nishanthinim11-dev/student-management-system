const form = document.querySelector("form");
const table = document.querySelector("table");

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

const row = table.insertRow(-1);

row.insertCell(0).textContent = name;
row.insertCell(1).textContent = department;
row.insertCell(2).textContent = rollNumber;

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

form.reset();
});

function deleteStudent(button) {
const row = button.parentElement.parentElement;
row.remove();
}

function editStudent(button) {
const row = button.parentElement.parentElement;

const name = prompt("Enter student name:", row.cells[0].textContent);
const department = prompt("Enter department:", row.cells[1].textContent);
const rollNumber = prompt("Enter roll number:", row.cells[2].textContent);

if (name && department && rollNumber) {
row.cells[0].textContent = name;
row.cells[1].textContent = department;
row.cells[2].textContent = rollNumber;
}
}
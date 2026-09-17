const form = document.querySelector("form");
const table = document.querySelector("table");

form.addEventListener("submit", function(event) {
event.preventDefault();

const inputs = form.querySelectorAll("input");

const name = inputs[0].value;
const department = inputs[1].value;
const rollNumber = inputs[2].value;

if (name === "" || department === "" || rollNumber === "") {
alert("Please fill all fields!");
return;
}

const row = table.insertRow();

row.insertCell(0).textContent = name;
row.insertCell(1).textContent = department;
row.insertCell(2).textContent = rollNumber;

const actionCell = row.insertCell(3);

actionCell.innerHTML = "<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>";

form.reset();
});

function deleteStudent(button) {
const row = button.parentElement.parentElement;
row.remove();
}

function editStudent(button) {
const row = button.parentElement.parentElement;

const name = row.cells[0].textContent;
const department = row.cells[1].textContent;
const rollNumber = row.cells[2].textContent;

const newName = prompt("Enter student name:", name);
const newDepartment = prompt("Enter department:", department);
const newRollNumber = prompt("Enter roll number:", rollNumber);

if (newName && newDepartment && newRollNumber) {
row.cells[0].textContent = newName;
row.cells[1].textContent = newDepartment;
row.cells[2].textContent = newRollNumber;
}

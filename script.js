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

  form.reset();
})
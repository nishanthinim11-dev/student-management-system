const form = document.querySelector("form");
const studentList = document.querySelector("ul");

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

  const student = document.createElement("li");

  student.textContent =
    name + " - " + department + " - " + rollNumber;

  studentList.appendChild(student);

  form.reset();
});
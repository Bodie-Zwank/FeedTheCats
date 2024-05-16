function addStudent() {
  // Get input values
  var firstName = document.getElementById("firstNameInput").value;
  var lastName = document.getElementById("lastNameInput").value;
  var grade = document.getElementById("gradeInput").value;
  var gender = document.getElementById("genderInput").value;

  // Create a new row
  var table = document.getElementById("studentsTableBody");
  var newRow = table.insertRow();

  // Insert cells into the row
  var firstNameCell = newRow.insertCell(0);
  var lastNameCell = newRow.insertCell(1);
  var gradeCell = newRow.insertCell(2);
  var genderCell = newRow.insertCell(3);
  var timeCell = newRow.insertCell(4);

  // Populate the cells with input values
  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
  gradeCell.innerHTML = grade;
  genderCell.innerHTML = gender;
  timeCell.innerHTML = "n/a"; // Empty for now
}

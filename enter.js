document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;
    
    // Here, you can perform any further action like sending data to a server or storing in local storage
    
    // For this example, let's just log the data to the console
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Grade:", grade);
    
    // You can add further processing or redirection logic here
  });
  
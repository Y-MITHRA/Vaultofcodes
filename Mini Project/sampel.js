document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var terms = document.getElementById("terms").checked;
  
    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '' || dob === '' || gender === '' || !terms) {
      alert("Please fill out all fields and agree to the terms and conditions.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    console.log("Form submitted successfully:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Date of Birth:", dob);
    console.log("Gender:", gender);
    console.log("Terms agreed:", terms);
  });
  
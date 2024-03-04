function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username !== "" && password !== "") {
        alert("Login successful!");
    } else {
        alert("Please fill out all fields.");
    }
}
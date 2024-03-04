function validateForm() {
    var name = document.getElementById("id").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var confirmPwd = document.getElementById("confirmPwd").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;

    if (name !== "" && email !== "" && password !== "" && confirmPwd !== "" && gender !== "" && phone !== "") {
        if (password === confirmPwd) {
            alert("Registration Successful");
        } 
        else {
            alert("Passwords do not match. Please try again.");
        }
    } else {
        alert("Please fill out all fields.");
    }
}
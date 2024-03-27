// JavaScript for form validation
function validateForm(event) {
    event.preventDefault(); // Prevents default form submission

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "";

    // If both email and password fields are empty, display an error message
    if (email.trim() === "" && password.trim() === "") {
        errorMessage.innerHTML = "Please enter your email and password.";
        return; // Exit the function without further validation
    }

    // Email validation
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        errorMessage.innerHTML += "Invalid email format. ";
    }

    // Password validation
    var passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{12,}$/;
    if (!passwordRegex.test(password)) {
        errorMessage.innerHTML += "Invalid password format.";
    }

    // If validation passes, submit the form
    if (errorMessage.innerHTML === "") {
        document.getElementById("loginForm").submit();
    }
}

document.getElementById("loginForm").addEventListener("submit", validateForm);

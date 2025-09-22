document.getElementById("form").addEventListener("submit", function(e) {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm_password").value.trim();

    let namep = document.getElementById("namep");
    let emailp = document.getElementById("emailp");
    let passwordp = document.getElementById("passwordp");
    let confirmPasswordp = document.getElementById("confirmp");
    let namePattern = /^[A-Z ][a-z]{3,15}$/;
    if (username === "") {
        namep.innerText = "Username cannot be empty";
        e.preventDefault();
    } else if (!namePattern.test(username)) {
        namep.innerText = "Invalid username format";
        e.preventDefault();
    }
    else {
        namep.innerText = "";
    }
    let emailPattern = /^[a-z 0-9._%+-]+@[a-z 0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        emailp.innerText = "Email cannot be empty";
        e.preventDefault();
    } else if (!emailPattern.test(email)) {
        emailp.innerText = "Invalid email format";
        e.preventDefault();
    } else {
        
        emailp.innerText = "";
    }
    let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])[a-z](?=.*[W]){8,}$/;
    if (password === "") {
        passwordp.innerText = "Password cannot be empty";
        e.preventDefault();
    } else if (!passwordPattern.test(password)) {
        passwordp.innerText = "Invalid password format";
        e.preventDefault();
    } else {
        passwordp.innerText = "";
    }
    if (confirmPassword === "") {
        confirmPasswordp.innerText = "Confirm Password cannot be empty";
        e.preventDefault();
    } else if (confirmPassword !== password) {
        confirmPasswordp.innerText = "Passwords do not match";
        e.preventDefault();
    } else {
        confirmPasswordp.innerText = "";
    }
});

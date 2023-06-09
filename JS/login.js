// Registration Form
const regForm = document.getElementById("registration-form");

regForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form submission

  const username = document.getElementById("reg-username").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  // Here we add our registration logic, such as sending a request to a server to create a new user account
  // we'll just store the username and password in local storage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Registration successful!");

  // Clear the form
  document.getElementById("reg-username").value = "";
  document.getElementById("reg-email").value = "";
  document.getElementById("reg-password").value = "";
});

// Login Form
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form submission

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  

  // Here we add our authentication logic, such as sending a request to a server to validate the user's credentials
  // compare the entered username and password with the values stored in local storage
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");
    window.location.href = "index(in).html"; // Redirect to success page
  } else {
    alert("Invalid username or password.");
  }
});

// show and unshow password
const eyeIcon1 = document.getElementById("eye-icon1");
const passwordInput1 = document.getElementById("login-password");

eyeIcon1.addEventListener("click", () => {
  if (passwordInput1.type === "password") {
    passwordInput1.type = "text";
    eyeIcon1.classList.remove("fa-eye-slash");
    eyeIcon1.classList.add("fa-eye");
  } else {
    passwordInput1.type = "password";
    eyeIcon1.classList.remove("fa-eye");
    eyeIcon1.classList.add("fa-eye-slash");
  }
});
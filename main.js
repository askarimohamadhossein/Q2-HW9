const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("togglePassword");
const errorMessage = document.getElementById("errorMessage");

errorMessage.textContent = "Password Input is Empty";
errorMessage.classList.remove("hidden");
errorMessage.style.color = "gray";
passwordInput.style.borderColor = "blue";

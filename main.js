const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("togglePassword");
const errorMessage = document.getElementById("errorMessage");

errorMessage.textContent = "Password Input is Empty";
errorMessage.classList.remove("hidden");
errorMessage.style.color = "gray";
passwordInput.style.borderColor = "blue";

passwordInput.addEventListener("input", function () {
  const value = passwordInput.value.trim();

  const hasCapital = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  if (value.length === 0) {
    errorMessage.textContent = "Password Input is Empty";
    errorMessage.style.color = "blue";
    passwordInput.style.borderColor = "blue";
    toggleButton.style.color = "gray";
  } else if (value.length < 8) {
    errorMessage.textContent =
      "Min 8 characters with at least one capital letter, a number, and a special character";
    errorMessage.style.color = "red";
    passwordInput.style.borderColor = "red";
    toggleButton.style.color = "red";
  } else if (!hasCapital) {
    errorMessage.textContent = "Please Enter a Capital letter";
    errorMessage.style.color = "red";
    passwordInput.style.borderColor = "red";
    toggleButton.style.color = "red";
  } else if (!hasNumber) {
    errorMessage.textContent = "Please Enter a number";
    errorMessage.style.color = "red";
    passwordInput.style.borderColor = "red";
    toggleButton.style.color = "red";
  } else if (!hasSpecial) {
    errorMessage.textContent = "Please Enter a special character";
    errorMessage.style.color = "red";
    passwordInput.style.borderColor = "red";
    toggleButton.style.color = "red";
  } else {
    errorMessage.textContent = "Password is Good (:✅";
    errorMessage.style.color = "gray";
    passwordInput.style.borderColor = "blue";
    toggleButton.style.color = "gray";
  }
});

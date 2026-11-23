const form = document.getElementById("signup-form");
const message = document.getElementById("form-message");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!email.validity.valid) {
    message.textContent = "Please enter a valid email address.";
    email.focus();
    return;
  }

  message.textContent = "You're on the list. We'll be in touch.";
  form.reset();
});

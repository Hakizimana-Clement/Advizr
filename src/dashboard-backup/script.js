const names = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorEl = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (names.value === "" || names.value == null) {
    messages.push("Name is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be long than 6 characters");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorEl.innerHTML = messages.join(", ");
  }
});

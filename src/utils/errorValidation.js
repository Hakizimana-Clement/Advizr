import { signupForm } from "../utils/forms";
const showError = (error) => {
  if (error.fullName !== null) {
    // document.querySelector(".hello").textContent = "hello";

    document.querySelector("#fullName").textContent = error.fullName;
    document.querySelector("#fullName").style.display = "block";
  } else if (error.email !== null) {
    document.querySelector("#email").textContent = error.email;
    document.querySelector("#email").style.display = "block";
  } else if (error.username !== null) {
    document.querySelector("#username").textContent = error.username;
    document.querySelector("#username").style.display = "block";
  } else if (error.password !== null) {
    document.querySelector("#password").textContent = error.password;
    document.querySelector("#password").style.display = "block";
  }
  signupForm();
};

export default showError;

const signupLink = document.querySelector(".direct-to-singup-form-only");
const loginContainer = document.querySelector("#login-form");
const signupContainer = document.querySelector("#signup-form");
const goToLogin = document.querySelector(".redirect-to-login");
const signupForm = document.querySelector(".signup-form");
import { updateURL } from "./addQueryParameter";
import { v4 as uuidv4 } from "uuid";

const signupFormOnly = () => {
  console.log("signup only");
  signupLink.addEventListener("click", () => {
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
    updateURL("tag", "signup");
  });
  goToLogin.addEventListener("click", () => {
    console.log("login again");
    loginContainer.style.display = "grid";
    signupContainer.style.display = "none";

    updateURL("tag", "login");
  });
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("signup form 100%");
    // all data from signup form
    const signupData = {
      id: uuidv4(),
      fullName: e.target.elements.fullName.value,
      username: e.target.elements.username.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    // create empty array or check the existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isUsernameFound = existingUsers.find(
      (user) => user.username === signupData.username
    );
    console.log(isUsernameFound);
    // check if username exist in local storage
    if (isUsernameFound === undefined) {
      // add the new user to existing users in array
      existingUsers.push(signupData);
      // update the users and save
      localStorage.setItem("users", JSON.stringify(existingUsers));
      // redirect to new page
      location.assign(`/src/dashboard/index.html#${signupData.id}`);
      // reset form
      signupForm.reset();
    } else {
      // FIX: To display none after user correct username
      document.querySelector(".taken").style.display = "inline-block";
      document.querySelector(".taken").textContent =
        "Sorry, this username is already in use";
      console.error("taken");
      signupForm.reset();
    }
  });
};

export { signupFormOnly };

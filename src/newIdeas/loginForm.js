const loginContainer = document.querySelector("#login-form");
const loginForm = document.querySelector(".sign-form");
const forgetPasswordEl = document.querySelector(".forget-password");
const forgetForm = document.querySelector("#forget-form");
const backToLogin = document.querySelector("#redirect-to-login");
import { updateURL } from "./addQueryParameter";
// const backToLogin = document.querySelector(".redirect-to-login");

// ############### login ##################
const loginFormOnly = () => {
  console.log("login only");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginData = {
      username: e.target.elements.username.value,
      password: e.target.elements.username.value,
    };
    // user authentication
    // userAuth(loginData)
    console.log(loginData);
  });

  forgetPasswordEl.addEventListener("click", () => {
    console.log("forget password clicked");
    loginContainer.style.display = "none";
    forgetForm.style.display = "block";
    loginForm.style.display = "block";

    updateURL("tag", "reset-password");
  });

  backToLogin.addEventListener("click", () => {
    console.log("back to login clicked");
    forgetForm.style.display = "none";
    // loginForm.style.display = "block";
    loginContainer.style.display = "grid";
    // loginContainer.classList.toggle("toggle-on");

    updateURL("tag", "login");
  });
};

export { loginFormOnly };

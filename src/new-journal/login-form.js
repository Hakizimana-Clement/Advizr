// const loginBtn = document.querySelector(".login-btn");
const loginBtnEl = document.querySelector("#yes");
const signupBtn = document.querySelector(".no");

const loginFormEl = document.querySelector(".login-form-new-v");
const popUpEl = document.querySelector(".pop-up");
const mainContainerEl = document.querySelector(".advice-container");
const formEl = document.querySelector(".sign-form");

import { loginError } from "./loginErroValidation";
import { userAuth } from "./user-auth-new";

// ############################# LOGIN BUTTON #################################
const loginBtn = () => {
  loginBtnEl.addEventListener("click", () => {
    console.log("clicked");
    document.querySelector(".pop-up").classList.toggle("toggle-on");
    document.querySelector(".yes").classList.toggle("yesShow");
    document.querySelector(".no").classList.remove("showNo");
    mainContainerEl.classList.toggle("toggle-off");
  });
};

// ############################# LOGIN FORM #################################
let loginFormError = {
  username: null,
  password: null,
};

const loginForm = () => {
  formEl.addEventListener("submit", (e) => {
    console.log("clicked login form");
    e.preventDefault();

    let hasError = false;
    // username
    if (e.target.elements.username.value.length === 0) {
      loginFormError.username = "Username should not be empty";
      hasError = true;
    } else if (e.target.elements.username.value.length < 5) {
      loginFormError.username = "Username should be greater than 5 character";
      hasError = true;
    } else {
      loginFormError.username = null;
    }
    // password
    if (e.target.elements.username.value.length === 0) {
      loginFormError.password = "Password should not be empty";
      hasError = true;
    } else if (e.target.elements.password.value.length < 5) {
      loginFormError.password = "Password should not be empty";
      hasError = true;
    } else {
      loginFormError.password = null;
    }

    loginError(loginFormError);

    if (hasError) {
      console.log("Error");
      return;
    }
    const loginData = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };

    userAuth(loginData);
    console.log(data);
    formEl.reset();
  });
};

// ########## FORGET PASSWORD ###############
const forgetBtnEl = document.querySelector(".forget-password");
const forgetRedirectBtn = () => {
  forgetBtnEl.addEventListener("click", () => {
    console.log("clicked");
    document.querySelector(".yes").classList.remove("yesShow");
    document.querySelector(".forget-form").classList.add("showNo");
  });
};

const redirectToLoginBtn = document.querySelector(".forget-redirect-login");

// ########## REDIRECT TO LOGIN ###############
const redirectToLogin = () => {
  redirectToLoginBtn.addEventListener("click", () => {
    console.log("back home");
  });
};

export { loginBtn, loginForm, forgetRedirectBtn, redirectToLogin };

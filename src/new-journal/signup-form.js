//  document.querySelector('.')
// const signupBtn = document.querySelector(".signup-btn");
const signupBtn = document.querySelector("#no");
const signupForm = document.querySelector(".signup-form");
const popUpEl = document.querySelector(".pop-up");
const mainContainerEl = document.querySelector(".advice-container");
const loginFormEl = document.querySelector(".login-form-new-v");

const signup = () => {
  signupBtn.addEventListener("click", () => {
    console.log("signup clicked");

    document.querySelector(".no").classList.toggle("showNo");

    document.querySelector(".yes").classList.remove("yesShow");
    mainContainerEl.classList.toggle("toggle-off");
    // mainContainerEl.classList.toggle("yesShow");

    // mainContainerEl.classList.toggle("signup-toggle-on");
    // mainContainerEl.classList.toggle("new-toggle-off-login"); // advice container
    // // popUpEl.classList.toggle("new-toggle-on-login");
    // signupForm.classList.toggle("new-toggle-on-signup");
    // loginFormEl.classList.toggle("new-toggle-off-login");
  });
};
export { signup };

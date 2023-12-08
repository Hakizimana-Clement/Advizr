// const loginBtn = document.querySelector(".login-btn");
const loginBtn = document.querySelector("#yes");
const signupBtn = document.querySelector(".no");

const loginFormEl = document.querySelector(".login-form-new-v");
const popUpEl = document.querySelector(".pop-up");
const mainContainerEl = document.querySelector(".advice-container");

const login = () => {
  loginBtn.addEventListener("click", () => {
    console.log("clicked");
    document.querySelector(".yes").classList.toggle("yesShow");
    document.querySelector(".no").classList.remove("showNo");

    // // new
    mainContainerEl.classList.toggle("toggle-off");
    // mainContainerEl.classList.toggle("login-toggle-on");
    // loginFormEl.classList.toggle("new-toggle-on-login");

    // document.querySelector(".signup-form").remove("new-toggle-on-signup");

    // old
    // mainContainerEl.classList.toggle("toggle-off"); // advice container
    // popUpEl.classList.toggle("new-toggle-on-login");
    // loginFormEl.classList.toggle("new-toggle-on-login");
  });
};

export { login };

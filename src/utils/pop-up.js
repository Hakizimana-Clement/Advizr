const mainEl = document.querySelector(".advice-container");
const popupEl = document.querySelector(".pop-up");
const loginBtn = document.querySelector(".login-btn");
const createNewAccount = document.querySelector(".create-new-account");
const Signinheading = document.querySelector(".sign-heading");
const signBtn = document.querySelector(".sign-btn");
const loginEl = document.querySelector(".login");
const test = document.querySelector(".testing");
const signupInput = document.querySelectorAll(".signup-input");
// let isOpen= false;

// ############### Signup ##################
const signup = () => {
  // console.log("signup");
  createNewAccount.addEventListener("click", () => {
    signupInput.forEach((input) => {
      input.style.display = "block";
    });
    console.log("signup clicked");
    Signinheading.textContent = "Sign up";
    signBtn.textContent = "Sign up";
    loginEl.innerHTML = `<p>Already have an account? <a href="test">Login</a></p>`;
    // test.classList.add("toggle-form");
    // const buttonEl = document.createElement("button");
    // buttonEl.textContent = "Login";
    // buttonEl.classList.add("loginBtn");
    // loginEl.append(buttonEl);
    // change
    // loginEl.textContent = "Login";
  });
};

// ############### Login ##################
const login = () => {
  loginBtn.addEventListener("click", () => {
    console.log("login");
    mainEl.classList.toggle("toggle-off");
    popupEl.classList.toggle("toggle-on");
    // createNewAccount.classList.add('')
    // isClose = mainEl.classList.toggle("toggle");
  });
};

export { login, signup };

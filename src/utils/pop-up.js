const mainEl = document.querySelector(".advice-container");
const popupEl = document.querySelector(".pop-up");
const loginBtn = document.querySelector(".login-btn");
const createNewAccount = document.querySelector(".create-new-account");
const Signinheading = document.querySelector(".sign-heading");
const signBtn = document.querySelector(".sign-btn");
const loginEl = document.querySelector(".login");
const signupInput = document.querySelectorAll(".signup-input");
const forgotPasswordEl = document.querySelector(".forgot-message");
const forgetRedirectLink = document.querySelector(".forget-link");
// let isOpen= false;

// ############### Update url query params ##################
const updateURL = (key, value) => {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.replaceState({}, document.title, url.href);
};
// ############### Signup ##################
const signup = () => {
  // console.log("signup");
  createNewAccount.addEventListener("click", () => {
    console.log("signup clicked");
    // Enable all input for sign up
    signupInput.forEach((input) => {
      input.style.display = "block";
    });
    // change login from Login to sign up in h2
    Signinheading.textContent = "Sign up";
    //  change btn from login to sign up
    signBtn.textContent = "Sign up";
    // change p element
    loginEl.innerHTML = `<p>Already have an account? <a href="http://localhost:5173/?tag=login">Login</a></p>`;
    // hide forgot message
    forgotPasswordEl.classList.toggle("toggle-off");
    document.querySelector(".reset-password").style.display = "none";
    // update query params
    updateURL("tag", "signup");
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
const loginIcon = () => {
  loginBtn.addEventListener("click", () => {
    console.log("login");
    mainEl.classList.toggle("toggle-off");
    popupEl.classList.toggle("toggle-on");

    updateURL("tag", "login");
    // createNewAccount.classList.add('')
    // isClose = mainEl.classList.toggle("toggle");
  });
};

// ############### Forget ##################
const forgetPassword = () => {
  console.log("clicked");
  forgotPasswordEl.addEventListener("click", () => {
    console.log("clicked clicked");
    // change heading title
    Signinheading.textContent = "Reset password";
    //  change btn login
    signBtn.textContent = "Send Password Reset Link";
    // display on username and password
    document.querySelector(".username").style.display = "none";
    document.querySelector(".password").style.display = "none";
    // reset password
    document.querySelector(".reset-password").style.display = "block";
    // hide
    forgotPasswordEl.classList.toggle("toggle-off");
    loginEl.classList.toggle("toggle-off");

    // redirect to login page
    forgetRedirectLink.classList.add("toggle-on-og");
    forgetRedirectLink.setAttribute("href", "http://localhost:5173/?tag=login");

    // update query params
    updateURL("tag", "forget");
  });
};
export { loginIcon, signup, forgetPassword };

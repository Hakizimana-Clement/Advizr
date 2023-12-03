// signup-form-only
const signupLink = document.querySelector(".direct-to-singup-form-only");
const loginContainer = document.querySelector("#login-form");

const signupContainer = document.querySelector("#signup-form");

const goToLogin = document.querySelector(".redirect-to-login");
const signupFormOnly = () => {
  console.log("signup only");
  signupLink.addEventListener("click", () => {
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
    // loginContainer.classList.toggle("toggle-off");
    // signupContainer.classList.toggle("toggle-on-og");
  });
  goToLogin.addEventListener("click", () => {
    console.log("login again");

    loginContainer.style.display = "grid";
    signupContainer.style.display = "none";

    // signupContainer.classList.toggle("toggle-off");
    // loginContainer.classList.toggle("toggle-on-og");
  });
};

export { signupFormOnly };

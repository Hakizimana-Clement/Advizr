const signupLink = document.querySelector(".direct-to-singup-form-only");
const loginContainer = document.querySelector("#login-form");
const signupContainer = document.querySelector("#signup-form");
const goToLogin = document.querySelector(".redirect-to-login");
const signupForm = document.querySelector(".signup-form");

const users = [];

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
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("signup form 100%");
    // all data from signup form
    const signupData = {
      fullName: e.target.elements.fullName.value,
      username: e.target.elements.username.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    // retrive existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // add the new user to existing users
    existingUsers.push(signupData);
    // console.log(signupData);
    // users.push(signupData);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    signupForm.reset();
  });
};

export { signupFormOnly };

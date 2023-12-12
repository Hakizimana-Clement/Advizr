//  document.querySelector('.')
// const signupBtn = document.querySelector(".signup-btn");
const signupBtnEl = document.querySelector("#no");
const signupFormEl = document.querySelector(".signup-form");
const popUpEl = document.querySelector(".pop-up");
const mainContainerEl = document.querySelector(".advice-container");
const loginFormEl = document.querySelector(".login-form-new-v");
import { signupError } from "./signupErroValidation";
import { v4 as uuidv4 } from "uuid";

let signupFormError = {
  fullName: null,
  email: null,
  username: null,
  password: null,
  confirmPassword: null,
};
const users = [];
const signupBtn = () => {
  signupBtnEl.addEventListener("click", () => {
    console.log("signup clicked");
    document.querySelector(".no").classList.toggle("showNo");
    document.querySelector(".yes").classList.remove("yesShow");
    mainContainerEl.classList.toggle("toggle-off");
    popUpEl.classList.toggle("toggle-on");
  });
};

const signupForm = () => {
  signupFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = uuidv4();

    let hasError = false;

    if (e.target.elements.fullName.value.length === 0) {
      signupFormError.fullName = "Names should not be empty";
      hasError = true;
    } else if (e.target.elements.fullName.value.length < 5) {
      signupFormError.fullName = "Names should be greater than 5 character";
      hasError = true;
    } else {
      signupFormError.fullName = null;
    }

    // username
    if (e.target.elements.username.value.length === 0) {
      signupFormError.username = "Username should not be empty";
      hasError = true;
    } else if (e.target.elements.username.value.length < 5) {
      signupFormError.username = "Username should be greater than 5 character";
      hasError = true;
    } else {
      signupFormError.username = null;
    }
    // email
    if (e.target.elements.email.value.length === 0) {
      signupFormError.email = "Email should not be empty";
      hasError = true;
    } else if (e.target.elements.email.value.length < 5) {
      signupFormError.email = "Email should be greater than 5 character";
      hasError = true;
    } else {
      signupFormError.email = null;
    }
    // password
    if (e.target.elements.password.value.length === 0) {
      signupFormError.password = "Password should not be empty";
      hasError = true;
    } else if (e.target.elements.password.value.length <= 8) {
      signupFormError.password = "Password should be greater than 8 character";
      hasError = true;
    } else {
      signupFormError.password = null;
    }

    //confirm password
    if (
      e.target.elements.password.value !==
      e.target.elements.confirmPassword.value
    ) {
      signupFormError.confirmPassword = "Password doesn't match ";
      hasError = true;
    } else {
      signupFormError.confirmPassword = null;
    }

    // if (e.target.elements.confirmPassword.value.length === 0) {
    //   signupFormError.confirmPassword = "confirm password should not be empty";
    //   hasError = true;
    // } else if (e.target.elements.confirmPassword.value.length <= 8) {
    //   signupFormError.confirmPassword =
    //     "confirm password should be greater than 8 character";
    //   hasError = true;
    // } else if (
    //   e.target.elements.password.value !==
    //   e.target.elements.confirmPassword.value
    // ) {
    //   signupFormError.confirmPassword = "Password doesn't match ";
    //   hasError = true;
    // } else {
    //   signupFormError.confirmPassword = null;
    // }

    signupError(signupFormError);

    if (hasError) {
      console.log("error found");
      return;
    }

    const token = id; // for verfiy
    console.log(token);
    const signupData = {
      id: id,
      token,
      fullname: e.target.elements.fullName.value,
      email: e.target.elements.email.value,
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
      confirmPassword: e.target.elements.confirmPassword.value,
      adviceId: null,
      adviceText: null,
    };

    // checking the existing users before create new one
    // const checkingExistingUsers = JSON.parse(
    //   localStorage.getItem("advice-users") || []
    // );

    const checkingExistingUsers =
      JSON.parse(localStorage.getItem("advice-users")) || [];
    console.log(checkingExistingUsers);
    // Just checking username, because username must be unique
    const isUsernameFound = checkingExistingUsers.find(
      (user) => user.username === signupData.username
    );
    console.log(isUsernameFound);
    if (isUsernameFound === undefined) {
      checkingExistingUsers.push(signupData);
      localStorage.setItem(
        "advice-users",
        JSON.stringify(checkingExistingUsers)
      );

      localStorage.setItem("user-token", token);

      // location.assign(`/src/dashboard/index.html`);
      // signupFormEl.reset();
    } else {
      // FIX: To display none after user correct username
      document.querySelector(".taken").style.display = "inline-block";
      document.querySelector(".taken").textContent =
        "Sorry, this username is already in use";
      console.error("taken");
      signupForm.reset();
    }
    console.log(signupData);
    users.push(signupData);
    // localStorage.setItem("advice-users", JSON.stringify(users));
    localStorage.setItem("signup-token", token);
    // redirect to other login page
    location.assign(`/src/dashboard/index.html`);
    // location.assign(`/src/dashboard-v2/index.html`);
    signupFormEl.reset();
    // location.assign(`/src/dashboard/index.html#${id}`);
  });
};

const loginRedirectBtnEl = document.querySelector(".redirect-to-login");
const loginRedirectBtn = () => {
  loginRedirectBtnEl.addEventListener("click", () => {
    console.log("clicked");
    document.querySelector(".no").classList.remove("showNo");
    document.querySelector(".yes").classList.add("yesShow");
  });
};

export { signupBtn, signupForm, loginRedirectBtn };

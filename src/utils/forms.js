const formEl = document.querySelector(".sign-form");
import { v4 as uuidv4 } from "uuid";
import showError from "./errorValidation";
let users = [];
let SignupFormError = {
  fullName: null,
  email: null,
  username: null,
  password: null,
  confirmPassowrd: null,
};

const signinForm = () => {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log(e.target.elements.username.value);
    const data = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };
    // console.log(data);
  });
};

const signupForm = () => {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = uuidv4();
    /////////////// validation //////////////////
    let hasError = false;
    // full name
    if (e.target.elements.fullName.value.length === 0) {
      SignupFormError.fullName = "🟠 Names should not be empty";
      hasError = true;
    } else {
      SignupFormError.fullName = null;
    }
    //email
    if (e.target.elements.email.value.length === 0) {
      SignupFormError.email = "Email should not be empty";
      hasError = true;
    } else {
      SignupFormError.email = null;
    }
    // username
    if (e.target.elements.username.value.length === 0) {
      SignupFormError.username = "Username should not be empty";
      hasError = true;
    } else {
      SignupFormError.username = null;
    }
    // password
    if (e.target.elements.password.value.length === 0) {
      SignupFormError.password = "Password should not be empty";
      hasError = true;
    } else {
      SignupFormError.password = null;
    }

    showError(SignupFormError);

    if (hasError) {
      console.log("Error");
      return;
    }
    ////////////////////////////////
    const data = {
      id: id,
      fullname: e.target.elements.fullName.value,
      email: e.target.elements.email.value,
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };
    console.log(data);
    users.push(data);
    localStorage.setItem("adive-users", JSON.stringify(users));
    // location.assign(`src/dashboard/index.html#${id}`);
    formEl.reset();
  });
  // console.log(users);
};

export { signinForm, signupForm };

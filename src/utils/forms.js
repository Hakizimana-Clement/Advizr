const formEl = document.querySelector(".sign-form");
import { v4 as uuidv4 } from "uuid";
import showError from "./errorValidation";
import { getSavedUser } from "./functions";
const users = [];
const user = getSavedUser();

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
    // const real = user.find((user) =>{
    //   user.username === data.username && user.password === data.user
    // })
    const real = user.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (real === undefined) {
      document.querySelector(".user-not-exist").style.display = "block";
      // throw new Error("User doesn't exist");
    } else {
      location.assign(`/src/dashboard/index.html#${real.id}`);
    }
    // console.log(real);
    // console.log(real[0].id);
    // console.log(real.id);

    // location.assign(`/src/dashboard/index.html#${real[0].id}`);
    // console.log(getSavedUser());
  });
};

const signupForm = () => {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = uuidv4();
    /////////////// validation //////////////////
    let hasError = false;
    // full name
    if (e.target.elements.fullName.value.length < 4) {
      SignupFormError.fullName = "🟠 be great than 4 character";
      hasError = true;
    } else {
      SignupFormError.fullName = null;
    }
    //email
    if (e.target.elements.email.value.length < 4) {
      SignupFormError.email = "Email should not be empty";
      hasError = true;
    } else {
      SignupFormError.email = null;
    }
    // username
    if (e.target.elements.username.value.length < 4) {
      SignupFormError.username = "Username should not be empty";
      hasError = true;
    } else {
      SignupFormError.username = null;
    }
    // password
    if (e.target.elements.password.value.length < 4) {
      SignupFormError.password = "Password should not be empty";
      hasError = true;
    } else {
      SignupFormError.password = null;
    }

    showError(SignupFormError);

    // if (hasError) {
    //   console.log("Error");
    //   return;
    // }
    ////////////////////////////////
    const data = {
      id: id,
      fullname: e.target.elements.fullName.value,
      email: e.target.elements.email.value,
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };

    // users.push({id:id});
    // localStorage.setItem("ids", JSON.stringify(users));
    users.push(data);
    localStorage.setItem("advice-users", JSON.stringify(users));
    // redirect to other login page
    // location.assign(`/src/dashboard/index.html#${id}`);
    formEl.reset();
  });
};

export { signinForm, signupForm };

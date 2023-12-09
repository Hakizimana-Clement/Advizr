const loginError = (error) => {
  if (error.username !== null) {
    console.log("run");
    document.querySelector("#username").textContent = error.username;
    document.querySelector("#username").style.display = "block";
  } else if (error.password !== null) {
    document.querySelector("#password").textContent = error.password;
    document.querySelector("#password").style.display = "block";
  } else {
    document.querySelector("#fullName").textContent = "";
  }
  // signupForm();
};
export { loginError };

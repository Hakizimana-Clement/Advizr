const signupError = (error) => {
  if (error.fullName !== null) {
    console.log(error.fullName);
    document.querySelector("#fullName").textContent = error.fullName;
    document.querySelector("#fullName").style.display = "block";
  } else if (error.email !== null) {
    console.log(error.email);
    document.querySelector("#email").textContent = error.email;
    document.querySelector("#email").style.display = "block";
  } else if (error.username !== null) {
    console.log(error.username);
    // document.querySelector("#username").textContent = error.username;
    document.querySelector("#signup-username").textContent = error.username;
    document.querySelector("#signup-username").style.display = "block";
  } else if (error.password !== null) {
    console.log(error.password);
    document.querySelector("#signup-password").textContent = error.password;
    // document.querySelector("#signup-password").textContent = "test";
    document.querySelector("#signup-password").style.display = "block";
  } else if (error.confirmPassword !== null) {
    console.log(error.confirmPassword);
    // document.querySelector("#confirm-password").textContent = " test";
    document.querySelector(
      "#confirm-password"
    ).textContent = `${error.confirmPassword}`;
    document.querySelector("#confirm-password").style.display = "block";
  } else {
    document.querySelector("#fullName").textContent = "";
    document.querySelector("#confirm-password").textContent = "";
  }
};
export { signupError };

const mainEl = document.querySelector(".advice-container");
const popupEl = document.querySelector(".pop-up");
const loginBtn = document.querySelector(".login-btn");
// let isOpen= false;
const login = () => {
  loginBtn.addEventListener("click", () => {
    console.log("login");
    mainEl.classList.toggle("toggle-off");
    popupEl.classList.toggle("toggle-on");
    // isClose = mainEl.classList.toggle("toggle");
  });
};

export default login;

//################# ALL FUNCTION #################
// ########## IMPORTS ##########
import { getSavedUsers } from "../newIdeas/functions";
import { randomByKeys } from "../new-journal/random-advice";
import { renderAdvices } from "./renderAdvices";
// import { setFilters } from "./filters";
import {
  createAdvice,
  getAdvice,
  removeAdvice,
  saveAdvices,
  toggleAdvice,
  toggleChecked,
  getSavedAdvices,
  isBookmardChecked,
} from "./advices";
// ########## User Validation ##########
const userToken = localStorage.getItem("user-token");
const users = getSavedUsers();
const user = users.find((userId) => userId.id === userToken);
if (user === undefined) {
  console.log(`user doesn't exist`);
  location.assign("../../#");
}

//################# LOGOUT #################
const logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", () => {
  console.log("logout clicked");
  // remove token in localstorage
  // localStorage.removeItem("user-token");
  location.assign("../../#");
});

//################# WELCOME #################
// add username in h1
document.querySelector(".username").textContent = `${user.username}`;
// change title in head
document.title = ` Advizr App - ${user.username}`;

// ############### API REQUEST && RENDERING && RUN IT #####################
const adviceId = document.querySelector("#advice-num");
const adviceText = document.querySelector("#advice");
const bookmarkColorToggle = document.querySelector(".bookmark-icon");
const adviceAPI = () => {
  apiRequest()
    .then((advice) => {
      adviceId.textContent = advice.id;
      adviceText.textContent = advice.advice;
      const adviceIdNumber = advice.id;
      console.log(adviceIdNumber);
      isBookmardChecked(adviceIdNumber);
      bookmarkColorToggle.classList.remove("toggle-bookmark"); // add hover active color on bookmark icon
    })
    .catch((err) => {
      console.log(err);
      return (adviceText.textContent = "Something went wrong..... 🚫");
    });
};
// call api after login
adviceAPI();

// get api request btn
const randomBtn = document.querySelector("#random-advice");
randomBtn.addEventListener("click", () => {
  adviceAPI();
  randomByKeys(); // request useing keypress
});

// render all saved advice
renderAdvices();

const boomarkBtn = document.querySelector(".bookmark-active");
boomarkBtn.addEventListener("click", () => {
  const adviceIdToSave = document.querySelector("#advice-num").textContent;
  const adviceTextToSave = document.querySelector("#advice").textContent;
  const state = false;
  console.log("clicked");
  if (
    adviceIdToSave === " " ||
    adviceTextToSave === "TypeError: Failed to fetch" ||
    adviceTextToSave === "Loading...... ⏳"
  ) {
    console.log("Failed to fetch data, please wait");
  } else {
    toggleAdvice(adviceIdToSave, adviceTextToSave, state);
    renderAdvices();
    // }
  }
});

//################# TOGGLE ICON COLOR ON BOOKMARK ICON #################
const bookmarkShadow = document.querySelector(".bookmark-shadow");
bookmarkColorToggle.addEventListener("click", () => {
  bookmarkColorToggle.classList.toggle("toggle-bookmark");
  if (bookmarkShadow) {
    bookmarkShadow.classList.remove("bookmark-shadow");
  }
});

//################# NAVBAR #################
const menuIcon = document.querySelector(".menu-icon");
const openAndCloseNavBar = document.querySelector(".navbar-open ");

// state
let isNavbarOpen = false;
menuIcon.addEventListener("click", () => {
  isNavbarOpen = !isNavbarOpen;
  if (isNavbarOpen) {
    openAndCloseNavBar.style.display = "flex";
    document.body.style.overflowY = "hidden";
  } else {
    openAndCloseNavBar.style.display = "none";
    document.body.style.overflowY = "auto";
  }
  // console.log(isNavbarOpen);
});

// mine
// saved advice
document.querySelector(".saved-advice").addEventListener("click", () => {
  console.log("hello");
  // control open/close navbar
  isNavbarOpen = false;
  openAndCloseNavBar.style.display = "none";
  document.body.style.overflowY = "auto";
  document.querySelector(".advice-container").style.display = "none";
  document.querySelector(".main-container ").style.display = "grid";
});

// normal api
document.querySelector(".new-advice ").addEventListener("click", () => {
  console.log("bye bye");
  isNavbarOpen = false;
  openAndCloseNavBar.style.display = "none";
  document.body.style.overflowY = "auto";
  document.querySelector(".advice-container").style.display = "grid";
  document.querySelector(".advice-container").style.display = "relative";
  document.querySelector(".main-container ").style.display = "none";
});

// trailer
// const links = document.querySelectorAll(".link");
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     //   // console.log("clicked", link);
//     isNavbarOpen = false;
//     openAndCloseNavBar.style.display = "none";
//     document.body.style.overflowY = "auto";
//     if (link.classList.contains("new-advice")) {
//       console.log("yes");
//       // document.querySelector(".main-container").style.display = "hidden";
//       // document.querySelector(".new-advice").style.display = "block";
//       // document.querySelector(".menu").classList.toggle("block");
//     } else {
//       console.log("no");
//       document.querySelector(".main-container").style.display = "grid";
//       document.querySelector(".menu").classList.toggle("hidden");
//       // document.querySelector(".menu").style.display = "hidden";
//     }
//     //   document.querySelector(".main-container").style.display = "grid";
//     //   document.querySelector(".new-advice").style.display = "block";
//   });
// });

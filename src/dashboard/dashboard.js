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
      bookmarkColorToggle.classList.remove("toggle-bookmark"); // add hover active color on bookmark icon
      const adviceIdNumber = advice.id;
      isBookmardChecked(adviceIdNumber);
      // const isSaved = getAdvice().find((advice) => advice.adviceId === "213");
      // if (isSaved !== undefined) {
      //   if (isSaved.checked === true) {
      //     console.log("i have it");
      //     bookmarkColorToggle.classList.add("advice-found"); // add hover active color on bookmark icon
      //   } else {
      //     console.log("noo");
      //     bookmarkColorToggle.classList.remove("toggle-bookmark"); // add hover active color on bookmark icon
      //   }
      // }
    })
    .catch((err) => {
      console.log(err);
      return (adviceText.textContent = err);
      // return (adviceText.textContent = "loading..........⏳");
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
  // console.log(adviceIdToSave, adviceTextToSave);
  if (
    adviceIdToSave === " " ||
    adviceTextToSave === "TypeError: Failed to fetch" ||
    adviceTextToSave === "Loading...... ⏳"
  ) {
    console.log("Failed to fetch data, please wait");
  } else {
    toggleAdvice(adviceIdToSave, adviceTextToSave, state);
    renderAdvices();
    // toggleChecked(userToken);
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

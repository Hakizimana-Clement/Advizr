// ########## User validation ##########
import { getSavedUsers } from "../newIdeas/functions";
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
import { randomByKeys } from "../new-journal/random-advice";
const adviceId = document.querySelector("#advice-num");
const adviceText = document.querySelector("#advice");
const adviceAPI = () => {
  apiRequest()
    .then((advice) => {
      adviceId.textContent = advice.id;
      adviceText.textContent = advice.advice;
      console.log(advice);
    })
    .catch((err) => {
      console.log(err);
      return (adviceText.textContent = err);
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

//################# ALL FUNCTION #################
// import { setFilters } from "./filters";
import { createAdvice } from "./advices";
import { renderAdvices } from "./renderAdvices";

// render all saved advice
renderAdvices();

// bookmark icon
const boomarkBtn = document.querySelector(".bookmark-active");
boomarkBtn.addEventListener("click", () => {
  const adviceIdToSave = document.querySelector("#advice-num").textContent;
  const adviceTextToSave = document.querySelector("#advice").textContent;
  console.log("clicked");
  console.log(adviceIdToSave, adviceTextToSave);
  if (
    adviceIdToSave === " " ||
    adviceTextToSave === "TypeError: Failed to fetch"
  ) {
    console.log("Failed to fetch data, please wait");
  } else {
    createAdvice(adviceIdToSave, adviceTextToSave);
    renderAdvices();
  }
});
// const boomarkBtn = document.querySelector(".bookmark-active");
// boomarkBtn.addEventListener("click", () => {
//   const adviceIdToSave = document.querySelector("#advice-num").textContent;
//   const adviceTextToSave = document.querySelector("#advice").textContent;
//   console.log("clicked");
//   console.log(adviceIdToSave, adviceTextToSave);
//   if (
//     adviceIdToSave === " " ||
//     adviceTextToSave === "TypeError: Failed to fetch"
//   ) {
//     console.log("Failed to fetch data, please wait");
//   } else {
//     // toggleAdvice(adviceIdToSave, adviceTextToSave);
//     createAdvice(adviceIdToSave, adviceTextToSave);
//     renderAdvices();
//   }
// });

// const toggleAdvice = (adviceId, adviceText) => {
//   console.log("working");
//   console.log(adviceId, adviceText);
//   // const existingAdviceIndex = getAdvice().findIndex(
//   //   (advice) => advice.adviceId === adviceId
//   // );

//   // if (existingAdviceIndex !== -1) {
//   //   // Remove advice if already exists
//   //   advices.splice(existingAdviceIndex, 1);
//   // } else {
//   //   // Add advice if not exists
//   //   createAdvice(adviceId, adviceText);
//   // }

//   createAdvice(adviceId, adviceText);
//   // createAdvice();
// };
//################# TOGGLE ICON COLOR ON BOOKMARK ICON #################
const bookmarkColorToggle = document.querySelector(".bookmark-icon");
let isOpen = false;
bookmarkColorToggle.addEventListener("click", () => {
  isOpen = bookmarkColorToggle.classList.toggle("toggle-bookmark");
  bookmark.classList.remove("bookmark-shadow");
});

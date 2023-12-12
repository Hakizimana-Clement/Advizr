import { v4 as uuidv4 } from "uuid";
let advices = [];
// get saved advices
const getSavedAdvices = () => {
  // const advicesJSON = localStorage.getItem("advice-users");
  const advicesJSON = localStorage.getItem("adviceData");
  try {
    advices = advicesJSON ? JSON.parse(advicesJSON) : [];
  } catch (error) {
    advices = [];
  }
};

// save advice
const saveAdvices = () => {
  // localStorage.setItem("advice-users", JSON.stringify(advices));
  localStorage.setItem("adviceData", JSON.stringify(advices));
};

// get all advice from array
const getAdvice = () => advices;

// create Advice
const createAdvice = (adviceId, adviceText, isSaved) => {
  const id = uuidv4();
  const token = localStorage.getItem("user-token");
  if (typeof isSaved === "boolean") {
    advices.push({ id, token, adviceId, adviceText, checked: isSaved });
    // advices.push({ ...adviceId, adviceText, checked: isSaved });
    saveAdvices();
  }
};

// remove advice
const removeAdvice = (id) => {
  const advice = advices.filter((advice) => advice.id !== id);
  if (advices.length !== advice.length) {
    advices = advice;
    saveAdvices();
  }
};

// toggle advice
const toggleAdvice = (adviceId, adviceText, state, token) => {
  state = !state;
  console.log(adviceId, adviceText, state, token);

  const advices = getAdvice();
  const adviceToRemove = advices.findIndex(
    (advice) => advice.adviceId === adviceId && advice.token === token
  );
  if (adviceToRemove !== -1) {
    advices.splice(adviceToRemove, 1);
    saveAdvices();
  } else {
    createAdvice(adviceId, adviceText, state);
  }
};

// // toggle advice
// const toggleAdvice = (adviceId, adviceText, state, token) => {
//   state = !state;
//   console.log(state);
//   const advices = getAdvice();
//   const adviceToRemove = advices.findIndex(
//     (advice) => advice.adviceId === adviceId && advice.id === token
//   );
//   if (adviceToRemove !== -1) {
//     advices.splice(adviceToRemove, 1);
//     saveAdvices();
//   } else {
//     createAdvice(adviceId, adviceText, state);
//   }
// };

// ############ TOGGLE BOOKMARK ACCORDING TO API ##########
const bookmarkColorToggle = document.querySelector(".bookmark-icon");
const isBookmardChecked = (adviceIdNumber) => {
  // const isSaved = getAdvice().find((advice) => advice.adviceId === "203");
  const isSaved = getAdvice().find(
    (advice) => advice.adviceId === adviceIdNumber
  );
  if (isSaved !== undefined) {
    if (isSaved.checked === true) {
      console.log("i have it");
      bookmarkColorToggle.classList.add("advice-found"); // add hover active color on bookmark icon
    } else {
      console.log("noo");
      bookmarkColorToggle.classList.remove("toggle-bookmark"); // add hover active color on bookmark icon
    }
  }
};
// ############ TOGGLE bookmark according to api ##########
// const bookmarkColorToggle = document.querySelector(".bookmark-icon");
// const isBookmarked = (adviceId) => {
//   console.log(adviceId);
//   const thisTime = getAdvice().find((advice) => advice.adviceId === adviceId);
//   if (thisTime !== undefined) {
//     console.log(thisTime);
//     bookmarkColorToggle.classList.add("advice-found"); // add hover active color on bookmark icon
//   } else {
//     bookmarkColorToggle.classList.remove("toggle-bookmark"); // remove hover active color on bookmark icon
//   }
// };
// ############ TOGGLE checked ##########
// import { getSavedUsers } from "../newIdeas/functions";
// const allUser = getSavedUsers();
// console.log(allUser);
// const toggleChecked = (id, checked) => {
// const toggleChecked = (id, checked) => {
const toggleChecked = (id) => {
  console.log(id);
  // console.log(checked);
  const isChecked = advices.find((advice) => advice.token === id);

  // if (isChecked !== undefined) {
  //   isChecked.checked = !isChecked.checked;
  // }
  console.log(isChecked);
  // console.log((isChecked.checked = !isChecked.checked));
  // if (isChecked !== undefined) {
  //   console.log("yes");
  //   console.log((advices.checked = !advices.checked));
  // } else {
  //   console.log("maybe");
  // }
  // console.log(isChecked);
  // console.log(isChecked);
  // if (isChecked!== undefined) {
  //   todo.completed = !todo.completed;
  //   savingTodos();
  // }
};

getSavedAdvices();

export {
  toggleAdvice,
  createAdvice,
  removeAdvice,
  getAdvice,
  saveAdvices,
  toggleChecked,
  getSavedAdvices,
  isBookmardChecked,
};

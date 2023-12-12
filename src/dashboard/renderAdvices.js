const adviceContainer = document.querySelector(".last-container");
import { getAdvice, removeAdvice } from "./advices";
const userToken = localStorage.getItem("user-token");

// render advice
const renderAdvices = () => {
  adviceContainer.innerHTML = "";

  getAdvice().forEach((advice) => {
    if (advice.token === userToken) {
      adviceContainer.append(genereateDOM(advice));
    }
  });
};
// // render advice
// const renderAdvices = () => {
//   const filters = getFilters();
//   // console.log(getAdvice());
//   // const filterAdvices = getAdvice().filter((advice) => {
//   const filterAdvices = user.filter((advice) => {
//     console.log(advice.token);
//     // const thisUser = users.filter((user) => user.id === advice.token);
//     // console.log(thisUser.token);
//     // if()
//     // const matched = advice.adviceText
//     //   .toLowerCase()
//     //   .includes(filters.searchText.toLowerCase());
//     // const hidebooked = !advice.checked || !filters.hideChecked;
//     // return hidebooked && matched;
//   });

// adviceContainer.innerHTML = "";

// filterAdvices.forEach((advice) => {
//   adviceContainer.append(genereateDOM(advice));
// });
// };

const genereateDOM = (advice) => {
  const pEl = document.createElement("h1");
  pEl.textContent = "teshhhhhhhhhhhhhhhht";
  const adviceDataEl = document.createElement("div");
  // advice id
  const adviceIdEl = document.createElement("p");
  adviceIdEl.textContent = `Advice # ${advice.adviceId}`;
  adviceIdEl.classList.add("new-container__id");
  adviceDataEl.append(adviceIdEl);

  // advice id
  const advicePEl = document.createElement("h2");
  advicePEl.textContent = advice.adviceText;
  advicePEl.classList.add("new-container__text");
  adviceDataEl.append(advicePEl);

  // delete button container
  const deleteBtnDiv = document.createElement("div");
  deleteBtnDiv.classList.add("flex", "justify-end");
  // delete button    //
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.classList.add("new-container__delete-btn");
  deleteBtn.addEventListener("click", () => {
    removeAdvice(advice.id);
    renderAdvices();
  });
  deleteBtnDiv.append(deleteBtn); // add delete button in  button container
  adviceDataEl.append(deleteBtnDiv); // add button container to main container

  adviceDataEl.classList.add("new-container");
  return adviceDataEl;
};

export { renderAdvices };

// archive

// // image container
// const imgDiv = document.createElement("div");
// imgDiv.classList.add("new-container__img--container");
// // image
// const imgEl = document.createElement("img");
// imgEl.src = "../../public/pattern-divider-mobile.svg";
// imgEl.alt = "pattern divider mobile";
// imgDiv.append(imgEl);
// adviceDataEl.append(imgDiv);

// // button container
// const buttonContainer = document.createElement("div");
// buttonContainer.classList.add("new-container__button--container");

// // img inside button (dice img)
// const imgBtnEl = document.createElement("img");
// imgBtnEl.src = "../../public/icon-dice.svg";
// // button
// const randomButtonEl = document.createElement("button");
// randomButtonEl.append(imgBtnEl);
// randomButtonEl.classList.add("new-container__button");
// randomButtonEl.addEventListener("click", () => {
//   console.log("clicked");
//   adviceAPI();
//   randomByKeys();
// });
// buttonContainer.append(randomButtonEl);
// adviceDataEl.append(buttonContainer);

// containers
// adviceContainer.classList.add("new-container");
// adviceContainer.append(pEl);
// adviceContainer.append(adviceDataEl);

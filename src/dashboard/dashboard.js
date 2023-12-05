// select html element
const logoutBtn = document.querySelector(".logout-btn");
// id and parapah
// start
const adviceId = document.querySelector("#advice-num");
const adviceText = document.querySelector("#advice");
const randomBtn = document.querySelector("#random-advice");
// end
const openNavbar = document.querySelector(".navbar-open");
const closeNavbar = document.querySelector(".menu");
const newAdviceLink = document.querySelector(".new-advice");
const savedAdviceLink = document.querySelector(".saved-advice");
const allAdviceContainer = document.querySelector(".all-advice");
// #############
const discoverYourAdvice = document.querySelector(".discover");

// get advice saved from localstorage
import { getSavedAdvices } from "../newIdeas/functions";
const savedAdvices = getSavedAdvices();

const userId = location.hash.substring(1);
// bookmark
const bookmarkButton = document.querySelector(".bookmark-icon");
// get user from local storage
const usersJSON = localStorage.getItem("users");
const users = JSON.parse(usersJSON);
const user = users.find((user) => user.id === userId);

//#################  check if id valid #################
if (user === undefined) {
  location.assign("../../#");
}
if (usersJSON !== null) {
  JSON.parse(usersJSON);
}
console.log(userId);
console.log(user);

// change title inside app
document.querySelector(".username").textContent = `${user.username}`;
// change title in head
document.title = ` Advizr App - ${user.username}`;

// adviceId.textContent = user.adviceId;
// adviceText.textContent = user.adviceText;

//################# LOGOUT #################
logoutBtn.addEventListener("click", () => {
  console.log("logout clicked");
  location.assign("../../#");
});

//################# NAVBAR #################
document.querySelector(".menu-icon").addEventListener("click", () => {
  openNavbar.classList.toggle("toggle-on");
  closeNavbar.classList.toggle("toggle-off");
});

//################# BOOKMARK ADD IN ARRAY OR REMOVE IT #################
let advices = [];
document.querySelector(".bookmark-active").addEventListener("click", () => {
  const adviceData = {
    id: user.id,
    adviceId: adviceId.innerText,
    adviceText: adviceText.innerText,
  };
  console.log(adviceData);

  const index = advices.findIndex((item) => {
    return item.adviceId === adviceData.adviceId;
  });

  if (index === -1) {
    advices.push(adviceData);
    console.log("Added to the array", advices);
  } else {
    advices.splice(index, 1);
    console.log("Added to the array", advices);
  }
  localStorage.setItem("adviceData", JSON.stringify(advices));
  renderAdvice();
});

//################# TOGGLE ICON COLOR ON BOOKMARK ICON #################
let isOpen = false;
bookmarkButton.addEventListener("click", () => {
  isOpen = bookmarkButton.classList.toggle("toggle-bookmark");
  bookmark.classList.remove("bookmark-shadow");
});

// const savedData = document.createElement("a");
// savedData.textContent = "test";
// savedData.setAttribute("href", "test.com");
// document.querySelector(".saved-advice").append(savedData);
// savedAdviceLink.setAttribute("href", ``);

//################ NAVBAR LINKS ###########################
savedAdviceLink.addEventListener("click", () => {
  console.log("clicked");
  // discoverYourAdvice.classList.toggle("toggle-on");
});
newAdviceLink.setAttribute(
  "href",
  `http://localhost:5173/src/dashboard/index.html#${user.id}`
);

newAdviceLink.addEventListener("click", () => {
  console.log("clicked new idea");
  openNavbar.classList.toggle("toggle-off");
  // openNavbar.classList.add("toggle-off");
  closeNavbar.classList.toggle("toggle-on");
  closeNavbar.classList.remove("toggle-off");
});

// const allLinks = document.querySelectorAll(".test");
// allLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     console.log("clicked");
//   });
// });
// console.log(allLinks);

//################ RENDERING SAVED ADVICE  ON PAGE ###########################

// const generateDOM = (simpleContainer) => {};
// const renderAdvice = () => {
//   // attach to div container
//   // allAdviceContainer.append(simpleContainer);
//   allAdviceContainer.append(generateDOM(simpleContainer));
// };

const renderAdvice = () => {
  savedAdvices.forEach((advice) => {
    console.log(advice);
    // container
    const simpleContainer = document.createElement("div");
    simpleContainer.innerHTML = "";
    simpleContainer.classList.add("advice-container-dom");
    // simpleContainer.classList.add("advice-container-dom");
    // id
    const adivceIdEl = document.createElement("span");
    adivceIdEl.textContent = `Advice #${advice.adviceId}`;
    // adivceIdEl.classList.add("advice-container-dom-id");
    adivceIdEl.classList.add("advice-container-dom-id");

    simpleContainer.append(adivceIdEl);
    // paragraph
    const pEl = document.createElement("p");
    pEl.textContent = advice.adviceText;
    // pEl.classList.add("advice-container-dom-pEL");
    pEl.classList.add("tracking-widest", "text-lg", "text-D_gray-Ligth_cyan");
    simpleContainer.append(pEl);

    // delete button
    const butttonContainer = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = "delete";
    button.addEventListener("click", () => {
      console.log("remove button");
      removeAdvice(advice.adviceId);
      localStorage.setItem("adviceData", JSON.stringify(savedAdvices));
    });
    button.classList.add("advice-container-dom-button");
    butttonContainer.append(button);
    butttonContainer.classList.add("advice-container-dom-button__container"); // container
    simpleContainer.append(butttonContainer);
    allAdviceContainer.append(simpleContainer);
    allAdviceContainer.classList.add(
      "bg-D_gray-Dark_grayish_blue",
      "mt-9",
      "py-6",
      "px-5",
      "rounded-lg",
      "relative",
      "w-[93%]",
      "sm:w-[65%]",
      "sm:m-auto",
      "md:w-[55%]",
      "lg:w-[50%]",
      "xl:w-[34%]"
    );
  });
};

// const renderAdvice = () => {};

//################ REMOVE ###########################
const removeAdvice = (id) => {
  console.log(id);
  // console.log(advices);
  const index = savedAdvices.findIndex((advice) => {
    return advice.adviceId === id;
  });
  if (index !== -1) {
    savedAdvices.splice(index, 1);
    // renderAdvice();
  }
  console.log(index);
};
// ############### API REQUEST #####################
const adviceAPI = () => {
  apiRequest()
    .then((advice) => {
      document.querySelector("#advice-num").textContent = "test";
      adviceId.textContent = advice.id;
      adviceText.textContent = advice.advice;
      console.log(advice);
    })
    .catch((err) => {
      return (adviceText.textContent = err);
      // console.log(err)
    });
};
adviceAPI();

randomBtn.addEventListener("click", () => {
  adviceAPI();
});

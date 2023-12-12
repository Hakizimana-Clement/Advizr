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
  localStorage.setItem("adviceData", JSON.stringify(advices));
};

// get all advice from array
const getAdvice = () => advices;

// create Advice
const createAdvice = (adviceId, adviceText) => {
  const id = uuidv4();
  const token = localStorage.getItem("user-token");
  advices.push({ id, token, adviceId, adviceText, checked: false });
  // advices.push({ token, adviceId, adviceText, checked: false });
  saveAdvices();
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
const toggleAdvice = (adviceId, adviceText) => {
  console.log("working");
  const advices = getAdvice();
  const adviceToRemove = advices.findIndex(
    (advice) => advice.adviceId === adviceId
  );
  if (adviceToRemove !== -1) {
    advices.splice(adviceToRemove, 1);
    saveAdvices();
  } else {
    createAdvice(adviceId, adviceText);
  }

  // console.log(id);
  // const advice = advices.find((advice) => advice.id === id);
  // if (advice !== undefined) {
  //   advice.checked = !advice.checked;

  //   saveAdvices();
  // }
};

getSavedAdvices();

export { toggleAdvice, createAdvice, removeAdvice, getAdvice, saveAdvices };

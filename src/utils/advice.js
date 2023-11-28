import apiRequest from "./api-request";
const adviceParagraphEl = document.querySelector("#advice");
const adviceIdElement = document.querySelector("#advice-num");

const advice = () => {
  apiRequest()
    .then((data) => {
      adviceIdElement.textContent = `${data.id}`;
      adviceParagraphEl.textContent = `"${data.advice}"`;
    })
    .catch((e) => {
      adviceParagraphEl.textContent = "Error: Unable to fetch advice ❌";
      console.log(e);
    });
};

export default advice;

import request from "./request";
const adviceElement = document.querySelector("#advice");
const adviceNumElement = document.querySelector("#advice-num");
const advice = () => {
  request()
    .then((data) => {
      adviceNumElement.textContent = `${data.id}`;
      adviceElement.textContent = `"${data.advice}"`;
    })
    .catch((e) => {
      adviceElement.textContent = "Error: Unable to fetch advice ❌";
      console.log(e);
    });
};

export default advice;

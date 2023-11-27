// styles
import "../styles/style.css";
// js files
import advice from "./utils/advice";
const randomButtonEl = document.querySelector("#random-advice");
advice();

randomButtonEl.addEventListener("click", (e) => {
  advice();
});

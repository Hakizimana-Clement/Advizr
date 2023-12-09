import advice from "./advice-new";
const randomButtonEl = document.querySelector("#random-advice");

// button to request new advice
const randomAdvice = () => {
  randomButtonEl.addEventListener("click", (e) => {
    console.log("clicked");

    advice();
  });
};

const randomByKeys = () => {
  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "Space":
        console.log("space");
        advice();
        break;
      case "Enter":
        console.log("enter");
        advice();
        break;
      case "ArrowUp":
        console.log("Arrow up");
        advice();
        break;
      case "ArrowDown":
        console.log("Arrow down");
        advice();
        break;
      case "ArrowLeft":
        console.log("Arrow left");
        advice();
        break;
      case "ArrowRight":
        console.log("Arrow right");
        advice();
        break;

      default:
        break;
    }
  });
};

export { randomAdvice, randomByKeys };

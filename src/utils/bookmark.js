// const bookmarkButton = document.querySelector(".bookmark-button");

const bookmarkEl = document.querySelector(".bookmark-active");
const bookmarkButton = document.querySelector(".bookmark-icon");
const adviceNumber = document.querySelector("#advice-num");
const adviceEl = document.querySelector("#advice");
const bookmark = () => {
  let isOpen = false;
  // toggle bookmark icon
  bookmarkButton.addEventListener("click", () => {
    isOpen = bookmarkButton.classList.toggle("toggle-bookmark");
    bookmark.classList.remove("bookmark-shadow");
  });

  let advices = [];
  bookmarkEl.addEventListener("click", () => {
    console.log("clicked");
    // login page
    // document.querySelector(".pop-up").classList.toggle("toggle-on");
    // document.querySelector(".advice-container").classList.toggle("toggle-off");

    // data to save
    const adviceData = [
      {
        id: "2345-45432-4566543",
        name: "test",
        email: "test@gmail.com",
        username: "test",
        password: "test", // Remember to securely hash passwords
        advice: [
          {
            id: 234,
            adviceText: "Always pray before sleep.",
          },
          // Additional advice objects for this user
        ],
      },
    ];
    console.log(adviceData);
    const index = advices.findIndex(
      (item) => item.adviceId === adviceData.adviceId
    );
    console.log(index);

    if (index === -1) {
      advices.push(adviceData);
      console.log("Added to the array", advices);
    } else {
      advices.splice(index, 1);
      console.log("Removed from the array", advices);
    }
    // localStorage.setItem("users", JSON.stringify(advices));
  });
};
export { bookmark as default };

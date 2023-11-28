// const bookmarkButton = document.querySelector(".bookmark-button");
const bookmarkButton = document.querySelector(".bookmark-icon");
const bookmark = () => {
  console.log("test");
  let isOpen = false;
  bookmarkButton.addEventListener("click", () => {
    console.log("clicked");
    isOpen = bookmarkButton.classList.toggle("toggle-bookmark");
    bookmark.classList.remove("bookmark-shadow");
  });
};
export { bookmark as default };

// const bookmarkButton = document.querySelector(".bookmark-button");
const bookmarkButton = document.querySelector(".bookmark-icon");
const bookmark = () => {
  let isOpen = false;
  bookmarkButton.addEventListener("click", () => {
    isOpen = bookmarkButton.classList.toggle("toggle-bookmark");
    bookmark.classList.remove("bookmark-shadow");
  });
};
export { bookmark as default };

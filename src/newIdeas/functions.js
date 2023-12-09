// const bookmarkEl = document.querySelector(".bookmark-active");
// get saved users
const getSavedUsers = () => {
  const userJson = localStorage.getItem("advice-users");
  if (userJson !== null) {
    return JSON.parse(userJson);
  } else {
    return [];
  }
};

// get saved advice
const getSavedAdvices = () => {
  const adviceJson = localStorage.getItem("adviceData");
  if (adviceJson !== null) {
    return JSON.parse(adviceJson);
  } else {
    return [];
  }
};

export { getSavedUsers, getSavedAdvices };

import { getSavedUsers } from "../newIdeas/functions";
const user = getSavedUsers();
console.log(user);
const userAuth = (userData) => {
  const userFound = user.find(
    (user) =>
      user.username === userData.username && user.password == userData.password
  );
  console.log(userFound);
  if (userFound === undefined) {
    document.querySelector(".user-not-exist").style.display = "block";
    throw new Error("User does not exist");
  } else {
    // redirect to other page
    localStorage.setItem("user-token", userFound.id);
    location.assign(`/src/dashboard/index.html`);
    // location.assign(`/src/dashboard-v2/index.html`);
  }
};

export { userAuth };

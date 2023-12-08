import { getSavedUsers } from "./functions";
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
    localStorage.setItem("loggedInID", userFound.id)
    location.assign(`/src/dashboard/index.html#${userFound.id}`);
  }
};

export { userAuth };

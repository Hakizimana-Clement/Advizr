// get saved user
const getSavedUser = () => {
  const userJson = localStorage.getItem("advice-users");
  if (userJson !== null) {
    return JSON.parse(userJson);
  } else {
    return [];
  }
};

export { getSavedUser };

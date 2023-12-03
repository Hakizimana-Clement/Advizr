console.log("test");
const userHashId = location.hash.substring(1);
const usersJSON = localStorage.getItem("users");
const users = JSON.parse(usersJSON);
console.log(users);
const user = users.find((user) => user.id === userHashId);

if (user === undefined) {
  location.assign("../../#");
}
if (usersJSON !== null) {
  JSON.parse(usersJSON);
}
console.log(userHashId);

// ############## styles ###################
import "../styles/style.css";
// ############## js files ###################
import advice from "./utils/advice";
import bookmark from "./utils/bookmark";
import { loginIcon, signup, forgetPassword } from "./utils/pop-up";
import { signinForm, signupForm } from "./utils/forms";
const randomButtonEl = document.querySelector("#random-advice");

// ################### API ##############################
// Run advice
advice();
// button to request new advice
randomButtonEl.addEventListener("click", (e) => {
  advice();
});
// #################################################
// ################### BOOKMARK #####################
bookmark();
// #################################################
// ################### pop-up#####################
loginIcon();
signup();
// #################################################
// ################### Forms #####################
signinForm();
signupForm();
forgetPassword();

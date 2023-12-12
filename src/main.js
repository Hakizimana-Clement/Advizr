// ############ LOGIN ##################
import {
  loginBtn,
  loginForm,
  forgetRedirectBtn,
  redirectToLogin,
} from "./new-journal/login-form";
loginBtn();
loginForm();
forgetRedirectBtn();
redirectToLogin();

// ############ LOGOUT ##################
import {
  signupBtn,
  signupForm,
  loginRedirectBtn,
} from "./new-journal/signup-form";
signupBtn();
signupForm();
loginRedirectBtn();

// ############ API ##################
import advice from "./new-journal/advice-new";
advice();

// ############ RANDOM ADVICE ##################
import { randomAdvice, randomByKeys } from "./new-journal/random-advice";
randomAdvice();
randomByKeys();

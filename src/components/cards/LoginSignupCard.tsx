import React from "react";
import { Link } from "react-router-dom";
import ForgotPasswordForm from "../auth/ForgotPasswordForm";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";

interface Props {
  title: string;
  ctaText: string;
  urlTitle: string;
  urlLink: string;
}
const LoginSignupCard = ({ ctaText, title, urlLink, urlTitle }: Props) => {
  return (
    <>
      <h2 className="text-white text-center mb-8 text-tracking-wider text-2xl md:text-2xl font-Manrope font-light">
        {title}
      </h2>

      {title === "Login" ? (
        <>
          <LoginForm />
        </>
      ) : title === "Create new account" ? (
        <>
          <SignupForm />
        </>
      ) : (
        <>
          <ForgotPasswordForm />
        </>
      )}

      <div className="text-white/70 text-center flex flex-col gap-1">
        {title === "Reset password" ? (
          ""
        ) : (
          <>
            <Link
              className="hover:text-D_gray-Neon_green_Dark hover:no-underline underline"
              to={"/users/forgot-password"}
            >
              Forgot Your Password
            </Link>
            <small>Or</small>
          </>
        )}
        <p>
          {ctaText}
          <Link
            to={urlLink}
            className="underline hover:text-D_gray-Neon_green hover:no-underline"
          >
            {urlTitle}
          </Link>
        </p>
      </div>
    </>
  );
};
export default LoginSignupCard;

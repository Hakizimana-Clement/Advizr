import React from "react";
import { Link } from "react-router-dom";
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
      ) : (
        <>
          <SignupForm />
        </>
      )}
      <p className="text-white text-center md:text-left">
        {ctaText}
        <Link
          to={urlLink}
          className="underline hover:text-D_gray-Neon_green hover:no-underline"
        >
          {urlTitle}
        </Link>
      </p>
    </>
  );
};
export default LoginSignupCard;

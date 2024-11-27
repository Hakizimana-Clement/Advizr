import React from "react";
import LoginSignupCard from "../cards/LoginSignupCard";
import AuthContainer from "./AuthContainer";

const ForgottonPassword = () => {
  return (
    <AuthContainer imgTitle="forgotton">
      <LoginSignupCard
        title="Reset password"
        ctaText="Login as different user "
        urlTitle="Login"
        urlLink="/users/login"
      />
    </AuthContainer>
  );
};
export default ForgottonPassword;

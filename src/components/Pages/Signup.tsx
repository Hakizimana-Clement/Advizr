import React from "react";
import AuthContainer from "../Layouts/AuthContainer";
import LoginSignupCard from "../cards/LoginSignupCard";

const Signup = () => {
  return (
    <>
      <AuthContainer imgTitle={"signup"}>
        <LoginSignupCard
          title="Create new account"
          ctaText="Already have an account? "
          urlTitle="Login"
          urlLink="/users/login"
        />
      </AuthContainer>
    </>
  );
};
export default Signup;

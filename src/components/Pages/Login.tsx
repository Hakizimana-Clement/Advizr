import React from "react";
import AuthContainer from "../Layouts/AuthContainer";
import LoginSignupCard from "../cards/LoginSignupCard";

const Login = () => {
  return (
    <>
      <AuthContainer>
        <LoginSignupCard
          title="Login"
          ctaText="You don't have an account? "
          urlTitle="Signup"
          urlLink="/users/signup"
        />
      </AuthContainer>
    </>
  );
};
export default Login;

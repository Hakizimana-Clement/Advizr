import React, { ReactNode } from "react";
import { loginImg } from "../../utils/Images";
import BackButton from "../BackButton";
import LoginButton from "../LoginButton";
interface Props {
  children: ReactNode;
}
const AuthContainer = ({ children }: Props) => {
  return (
    <>
      <LoginButton />
      <BackButton />
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="w-[80%] md:w-[53%] lg:w-[35%]">
          <div className="flex justify-center mb-8 hover:cursor-pointer">
            <img src={loginImg} alt="Advizr App Logo" className="h-28 w-28 " />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
export default AuthContainer;

import React, { ReactNode } from "react";
import { forgottonImg, loginImg } from "../../utils/Image";
import BackButton from "../BackButton";
import LoginButton from "../LoginButton";
interface Props {
  children: ReactNode;
  imgTitle: string;
}
const AuthContainer = ({ children, imgTitle }: Props) => {
  return (
    <>
      <LoginButton />
      <BackButton />
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="w-[80%] md:w-[53%] lg:w-[35%]">
          <div className="flex justify-center mb-8 hover:cursor-pointer">
            <img
              src={imgTitle === "forgotton" ? forgottonImg : loginImg}
              alt="Advizr App Logo"
              className="h-20 w-20 "
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
export default AuthContainer;

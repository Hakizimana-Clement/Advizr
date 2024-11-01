import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const LoginButton = () => {
  return (
    <div className="flex justify-end mt-4 mr-4 absolute top-0 right-0 hover:white-black">
      <FaRegUserCircle
        size="2rem"
        className="text-white hover:text-D_gray-Neon_green hover:cursor-pointer"
      />
    </div>
  );
};
export default LoginButton;

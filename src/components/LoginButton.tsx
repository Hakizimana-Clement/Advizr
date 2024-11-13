import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

interface Props {
  url?: string;
}

const LoginButton = ({ url }: Props) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (url) {
      navigate(url);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="flex justify-end mt-4 mr-4 absolute top-0 right-0 hover:white-black"
      onClick={handleNavigation}
    >
      <FaRegUserCircle
        size="2rem"
        className="text-white hover:text-D_gray-Neon_green hover:cursor-pointer"
      />
    </div>
  );
};
export default LoginButton;

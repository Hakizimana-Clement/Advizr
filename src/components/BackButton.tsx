import React from "react";
import { HiArrowLeft } from "react-icons/hi";

const BackButton = () => {
  return (
    <div className=" mt-4 ml-4 absolute top-0  hover:border-D_gray-Neon_green hover:cursor-pointer border rounded-md py-1 px-4">
      <HiArrowLeft size="1rem" className="text-white" />
    </div>
  );
};
export default BackButton;

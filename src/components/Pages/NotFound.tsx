import React from "react";
import { notFoundImg } from "../../utils/Images";
import Button from "../Button";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center  h-screen">
        <div className=" w-4/5 md:w-3/5 flex justify-center items-center flex-col lg:border my-8 rounded border-D_gray-Neon_green_Dark boxShadow">
          <img
            src={notFoundImg}
            alt="Not Found Image"
            className="mb-10 md:mb-20 lg:w-[50%]"
          />
          <h1 className="text-2xl md:text-4xl text-center text-D_gray-Neon_green capitalize tracking-wider mb-5">
            Page not found
          </h1>
          <p className="text-gray-300 text-center mb-10 text-xl">
            Sorry, the page you're looking for can't be found
          </p>
          <div className="w-1/2 md:3/5 lg:w-1/5">
            <Button styles="py-1 md:py-2 hover:text-white hover:bg-D_gray_Neon_green hover:bg-boxShadow text-gray-800 font-medium bg-D_gray_Neon_green_Dark text-black  ">
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;

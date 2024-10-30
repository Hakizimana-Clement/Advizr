import React from "react";
import { useNavigate } from "react-router";
import { emptyImg } from "../../utils/Image";
import Button from "../Button";

const NotAdviceFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className=" w-4/5 md:w-3/5 flex py-6 justify-center items-center flex-col lg:border my-8 rounded border-D_gray-Neon_green_Dark boxShadow">
        <img src={emptyImg} alt="Not Found Image" className="my-8 lg:w-[25%]" />
        <h1 className="text-2xl md:text-4xl text-center text-D_gray-Neon_green capitalize tracking-wider mb-5">
          No Favorite Quotes
        </h1>
        <p className="text-gray-300 text-center mb-10 text-xl">
          Click the Bookmark icon to save quotes.
        </p>

        <div className="w-1/2 md:3/5 lg:w-1/5">
          <Button
            onClick={() => navigate(-1)}
            styles="py-1 md:py-2 hover:text-white hover:bg-D_gray_Neon_green hover:bg-boxShadow text-gray-800 font-medium bg-D_gray_Neon_green_Dark text-black"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NotAdviceFound;

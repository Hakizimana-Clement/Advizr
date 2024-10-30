import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Heading = () => {
  return (
    <>
      {/* Start icon */}
      <div className="flex justify-end pt-4 pr-4 absolute top-0 right-0 hover:white-black">
        <FaRegUserCircle
          size="2rem"
          className="text-white hover:text-D_gray-Neon_green hover:cursor-pointer"
        />
      </div>
      {/* End icon */}
      {/* Start card Container */}
      <header className="mb-14 md:mb-16">
        <h1 className="text-center text-3xl text-white font-bold tracking-widest">
          Advizr
        </h1>
        <p className="text-center text-lg md:text-xl text-white mt-5 capitalize -tracking-tighter">
          Get life advice that works for you with Advizr app
        </p>
      </header>
    </>
  );
};
export default Heading;

import React from "react";
import LoginButton from "../LoginButton";

const Heading = () => {
  return (
    <>
      <LoginButton />
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

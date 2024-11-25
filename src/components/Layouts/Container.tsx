import React, { ReactNode, useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  return (
    <>
      {loader ? (
        <>
          <div className="w-full h-full flex items-center justify-center absolute">
            <RingLoader
              role="progressbar"
              color="hsl(150, 100%, 66%)"
              size={90}
            />
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen  flex flex-col justify-center">
            {children}
          </div>
        </>
      )}
    </>
  );
};
export default Container;

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="bg-D_gray-DEFAUT_Dark_Blue min-h-screen  flex flex-col justify-center">
      {children}
    </div>
  );
};
export default Container;

import React from "react";
import CardLayout from "../Layouts/CardLayout";

interface Props {
  isVisible: boolean;
}

const MainContent = ({ isVisible }: Props) => {
  return (
    <div
      className={`place-content-center h-screen transition-all duration-300 ${
        isVisible ? "col-span-5" : "col-span-5"
      } lg:col-span-4`}
    >
      <CardLayout />
    </div>
  );
};

export default MainContent;

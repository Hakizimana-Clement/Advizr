import React from "react";
import DashboardContainer from "../dashboard/DashboardContainer";
import Navbar from "../dashboard/DashboardNavbar";
import Sidebar from "../dashboard/DashboardSidebar";
import FavoriteLayout from "../dashboard/Favorite/Favorite";

const Favorite = () => {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Sidebar />
        <FavoriteLayout />
      </DashboardContainer>
    </>
  );
};
export default Favorite;

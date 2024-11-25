import React from "react";
import DashboardContainer from "../dashboard/DashboardContainer";
import Navbar from "../dashboard/DashboardNavbar";
import Sidebar from "../dashboard/DashboardSidebar";
import FavoriteLayout from "../dashboard/Favorite/Favorite";
import { useAppSelector } from "../../redux/hooks/hooks";

const Favorite = () => {
  const openModel = useAppSelector((state) => state.nav.openModel);
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Sidebar isVisible={openModel} />
        <FavoriteLayout isVisible={openModel} />
      </DashboardContainer>
    </>
  );
};
export default Favorite;

import React, { useState } from "react";
import { HiOutlineBookmark } from "react-icons/hi";
import { showInfoToast, showSuccessToast } from "../conf/ToastConfig";
import userInfo from "../utils/userDetails";

const Bookmarks = () => {
  const [status, setStatus] = useState(false);

  const handleToggle = async () => {
    const userData = await userInfo();

    if (userData?.status) {
      showSuccessToast("Advice saved!");

      setStatus(true);
    } else {
      showInfoToast("Please log in to save this Advice.");
    }
  };

  return (
    <HiOutlineBookmark
      size="40"
      fill={status ? "#54cf91" : "#cee3e9"}
      color={status ? "#54cf91" : "#cee3e9"}
      onClick={handleToggle}
    />
  );
};
export default Bookmarks;

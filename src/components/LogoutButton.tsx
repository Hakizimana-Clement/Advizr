import React from "react";
import { HiLogout } from "react-icons/hi";
import { useNavigate } from "react-router";
import authService from "../appwrite/auth";
import { showSuccessToast } from "../conf/ToastConfig";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    showSuccessToast("logout successfully");
    navigate("/");
  };

  return (
    <div
      onClick={handleLogout}
      className="flex justify-between items-center gap-2 cursor-pointer"
    >
      <HiLogout />
      <span>Logout</span>
    </div>
  );
};
export default LogoutButton;

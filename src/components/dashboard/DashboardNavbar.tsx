import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdArrowDropDownCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleModel } from "../../redux/features/navSlice";
import { logo } from "../../utils/Images";
import Button from "../Button";
import LogoutButton from "../LogoutButton";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    setShowLogout((prev) => !prev);
  };

  const handleToggle = () => {
    dispatch(toggleModel());
  };

  return (
    <header className="">
      <nav className="text-D_gray-Ligth_cyan border-color-400 py-2 border-b flex justify-between items-center px-3 relative">
        <div className="flex items-center justify-center gap-3">
          <ul>
            <li onClick={handleToggle}>
              <HiMenuAlt2
                size={"1.4rem"}
                className="hover:text-D_gray-Neon_green hover:cursor-pointer"
              />
            </li>
          </ul>
          <div className="flex justify-center items-center gap-1 font-medium text-sm">
            <img src={logo} alt="advizr logo" className="w-9" />
            <h3 className="hidden md:block">Advizr App</h3>
          </div>
        </div>
        <ul className="justify-center gap-5 mr-4  flex">
          <li
            className="flex justify-center items-center gap-2"
            onClick={handleLogout}
          >
            <FaRegUserCircle size="2rem" />
            <Button styles="w-0 bg-transparent text-whit">
              <MdArrowDropDownCircle className="" />
            </Button>
            <div
              className={`text-white absolute top-12 right-2 bg-slate-500 py-1 px-3 rounded r  hover:bg-D_gray-Neon_green_Dark ${
                showLogout ? "flex" : "hidden"
              }`}
            >
              <LogoutButton />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;

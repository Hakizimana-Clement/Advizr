import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdArrowDropDownCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleModel } from "../../redux/features/navSlice";
import { logo } from "../../utils/Images";
import Button from "../Button";

const Navbar = () => {
  const dispatch = useDispatch();

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
          <li className="flex justify-center items-center gap-2">
            <FaRegUserCircle size="2rem" />
            <Button styles="w-0 bg-transparent text-white">
              <MdArrowDropDownCircle className="hover:text-D_gray-Neon_green" />
            </Button>
            <div className="bg-D_gray-Ligth_cyan text-white absolute top-8 right-0 py-4 px-4 rounded hidden">
              <Button styles="py-1 px-2 text-sm ">Logout</Button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;

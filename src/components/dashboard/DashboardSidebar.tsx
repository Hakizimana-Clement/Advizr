import React from "react";
import { HiHeart, HiHome, HiOutlineCog } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { toggleModel } from "../../redux/features/navSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";
interface SidebarProps {
  isVisible: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible }) => {
  const dispatch = useAppDispatch();

  const links = [
    { to: "/users/dashboard", icon: <HiHome />, label: "Home" },
    {
      to: "/users/dashboard/favorite",
      icon: <HiHeart />,
      label: "My Favorite",
    },
    {
      to: "/users/dashboard/setting",
      icon: <HiOutlineCog />,
      label: "Setting",
    },
  ];
  const handleClick = () => {
    dispatch(toggleModel());
  };

  return (
    <aside
      className={`bg-gray-700 px-3 pt-2 h-screen transition-transform duration-300 ${
        isVisible ? "col-auto translate-x-0" : "col-span-0 -translate-x-full"
      } md:block lg:col-span-1 lg:translate-x-0`}
    >
      <div className="flex flex-col md:items-center lg:items-start gap-5">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            onClick={handleClick}
            className={({ isActive }) =>
              `flex justify-center md:justify-start items-center gap-3 text-lg ${
                isActive ? `text-D_gray-Neon_green` : `text-D_gray-Ligth_cyan`
              }`
            }
          >
            <span className="text-2xl lg:text-base">{link.icon}</span>
            <span className="hidden lg:block">{link.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

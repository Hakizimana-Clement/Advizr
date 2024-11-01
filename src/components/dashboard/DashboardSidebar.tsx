import React from "react";
import { HiHeart, HiHome, HiOutlineCog } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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

  return (
    <div className="bg-gray-700 col-auto px-3 pt-2 hidden lg:block h-screen">
      <div className="flex flex-col gap-5">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 text-lg ${
                isActive ? `text-D_gray-Neon_green` : `text-D_gray-Ligth_cyan`
              }`
            }
          >
            {link.icon}
            <span className="hidden md:block">{link.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

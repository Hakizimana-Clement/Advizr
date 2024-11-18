import React, { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  styles: string;
  buttonType?: "submit" | "reset" | "button";
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  buttonType = "button",
  styles,
  children,
  onClick,
}) => (
  <button
    onClick={onClick}
    type={buttonType}
    className={`shadow rounded w-full text-white bg-D_gray-Neon_green_Dark hover:bg-D_gray-Neon_green/65 text-lg text-center cursor-pointer ${styles}`}
  >
    {children}
  </button>
);
export default Button;

import React from "react";
import { HiTrash } from "react-icons/hi";

interface Props {
  onClick: () => void;
}
const Trash = ({ onClick }: Props) => {
  const handleToggle = () => {
    console.log("clicked");
    onClick();
  };
  return (
    // <HiTrash size="25" fill="#cee3e9" color="#cee3e9" onClick={handleToggle} />
    <HiTrash size="25" fill="#fff" onClick={handleToggle} />
  );
};
export default Trash;

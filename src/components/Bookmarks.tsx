import React, { useState } from "react";
import { HiOutlineBookmark } from "react-icons/hi";

interface Props {
  onClick: () => void;
}

const Bookmarks = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const handleToggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status)
    return (
      <HiOutlineBookmark
        size="40"
        fill="#54cf91"
        color="#54cf91"
        onClick={handleToggle}
      />
    );
  return (
    <HiOutlineBookmark
      size="40"
      fill="#cee3e9"
      color="#cee3e9"
      onClick={handleToggle}
    />
  );
};
export default Bookmarks;

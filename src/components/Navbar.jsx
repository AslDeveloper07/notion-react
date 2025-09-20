import React, { useState, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdStarOutline } from "react-icons/io";
import { MdKeyboardArrowDown, MdLock } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { BsLayoutSidebar } from "react-icons/bs";

const Navbar = ({ setIsOpen }) => {
  const [pageName, setPageName] = useState("JavaScript");
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(pageName);

  // localStorage dan olish
  useEffect(() => {
    const savedName = localStorage.getItem("pageName");
    if (savedName) {
      setPageName(savedName);
      setInputValue(savedName);
    }
  }, []);

  // Enter bosilganda saqlash
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setPageName(inputValue);
      localStorage.setItem("pageName", inputValue);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-[#2a2a2a] bg-[#191919]">
      {/* Chap qism */}
      <div className="flex items-center gap-3">
        {/* Sidebar toggle */}
        <BsLayoutSidebar
          className="text-gray-400 cursor-pointer hover:text-white"
          onClick={() => setIsOpen((prev) => !prev)}
        />

        {/* Page name (edit bilan) */}
        <div
          className="flex items-center gap-2"
        >
          {isEditing ? (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={() => setIsEditing(false)}
              autoFocus
              className="bg-transparent border border-gray-600 text-white text-sm px-1 rounded outline-none"
            />
          ) : (
            <p
              className="text-sm text-white cursor-pointer "
              onClick={() => setIsEditing(true)}
            >
              {pageName}
            </p>
          )}

          {/* Private */}
          <div className="flex items-center gap-1 hover:bg-[#202020] rounded cursor-pointer px-2 py-[2px]">
            <MdLock size={12} className="text-gray-500" />
            <span className="text-xs text-gray-400">Private</span>
            <MdKeyboardArrowDown size={12} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* O‘ng qism */}
      <div className="flex items-center gap-4">
        <p className="text-xs text-gray-500">Edited just now</p>
        <TbMessage className="text-gray-300 hover:text-white cursor-pointer" />
        <IoMdStarOutline className="text-gray-300 hover:text-yellow-400 cursor-pointer" />
        <HiOutlineDotsHorizontal className="text-gray-400 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;

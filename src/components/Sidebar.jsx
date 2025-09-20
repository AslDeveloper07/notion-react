import React from "react";
import { RxNotionLogo } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { RiInboxLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { TbSettings, TbShoppingBag, TbTrash } from "react-icons/tb";

const Sidebar = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="sidebar"
          initial={{ x: -250 }} // chapdan chiqish
          animate={{ x: 0 }}
          exit={{ x: -250 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed top-0 left-0 h-full w-[220px] bg-[#202020] shadow-lg p-2 pt-3 z-20"
        >
          <div className="flex flex-col justify-between h-full">


            <div>
              <div className="flex items-center gap-2 mb-6">
              <RxNotionLogo size={20} className="text-white" />
              <h1 className="text-sm font-semibold">Notion Clone</h1>
            </div>
              {/* Profile / Workspace */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 flex items-center justify-center rounded bg-gray-700 text-xs text-white">
                  A
                </div>
                <p className="text-sm text-white font-medium">
                  ASLWEX King’s Notion
                </p>
              </div>

              {/* Main Menu */}
              <div className="flex flex-col gap-1 text-gray-300 text-sm">
                <p className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                  <AiOutlineSearch size={19} />
                  <p className="text-[13px]">Search</p>
                </p>
                <p className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                  <AiOutlineHome size={19} />
                  <p className="text-[13px]">Home</p>
                </p>
                <p className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                  <RxNotionLogo size={18} />
                  <p className="text-[13px]"> Notion AI</p>
                  <span className="ml-auto text-[10px] bg-blue-600 text-white px-1 rounded">
                    New
                  </span>
                </p>
                <p className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                  <RiInboxLine size={19} />
                  <p className="text-[13px]">Inbox</p>
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#2a2a2a] my-3"></div>

              {/* Private */}
              <p className="text-xs text-gray-500 mb-1 px-2">Private</p>
              <div className="flex flex-col gap-1 text-gray-300 text-sm">
                <p className="flex items-center justify-between px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                  <span className="flex items-center gap-1">
                    <MdKeyboardArrowRight /> JavaScript
                  </span>
                  <IoMdAdd />
                </p>
                <p className="px-6 py-1 hover:bg-[#2a2a2a] rounded cursor-pointer">
                  Bash learning
                </p>
                <p className="px-6 py-1 hover:bg-[#2a2a2a] rounded cursor-pointer line-clamp-1">
                  Sass (Syntactically Awesome…)
                </p>
                <p className="px-6 py-1 hover:bg-[#2a2a2a] rounded cursor-pointer">
                  React
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#2a2a2a] my-3"></div>

              {/* Teamspaces */}
              <p className="text-xs text-gray-500 mb-1 px-2">Teamspaces</p>
              <div className="flex flex-col gap-1 text-gray-300 text-sm">
                <p className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                  🏠 ASLWEX King’s Notion HQ
                </p>
                <p className="px-6 py-1 hover:bg-[#2a2a2a] rounded cursor-pointer">
                  Teamspace Home
                </p>
                <p className="px-6 py-1 hover:bg-[#2a2a2a] rounded cursor-pointer">
                  + Add new
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#2a2a2a] my-3"></div>

              {/* Settings */}
              <div className="flex flex-col gap-1 text-gray-300 text-sm">
                <p className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                  <TbSettings size={19} /> Settings
                </p>
                <p className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                  <TbShoppingBag size={19} /> Marketplace
                </p>
                <p className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                  <TbTrash size={19} /> Trash
                </p>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-[#2a2a2a] pt-3">
              <div className="bg-[#2a2a2a] p-2 rounded text-xs text-gray-300 cursor-pointer">
                Invite members <br />
                <span className="text-gray-500">
                  Collaborate with your team.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { RxNotionLogo } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { RiInbox2Fill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { TbSettings, TbShoppingBag, TbTrash } from "react-icons/tb";
import { JavaScripLogo } from "../assets/assets";
import { SiJavascript } from "react-icons/si";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaReact } from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  const [privateOpen, setPrivateOpen] = useState(true);
  const [teamOpen, setTeamOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="sidebar"
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          exit={{ x: -250 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed top-0 left-0 h-full w-[220px] bg-[#202020] shadow-lg p-2 pt-3 z-20"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6">
                <RxNotionLogo size={20} className="text-white" />
                <h1 className="text-sm font-semibold">Notion Clone</h1>
              </div>

              {/* Profile */}
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
                <p className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-[#2a2a2a] cursor-pointer">
                  <AiOutlineSearch size={19} />
                  <span className="text-[13px]">Search</span>
                </p>
                <p className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-[#2a2a2a] cursor-pointer">
                  <AiOutlineHome size={19} />
                  <span className="text-[13px]">Home</span>
                </p>
                <p className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-[#2a2a2a] cursor-pointer">
                  <RiInbox2Fill size={19} />
                  <span className="text-[13px]">Inbox</span>
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#2a2a2a] my-3"></div>

              {/* Private Accordion */}
              <p
                className="text-sm text-gray-500 mb-1 px-2 cursor-pointer flex items-center justify-between"
                onClick={() => setPrivateOpen(!privateOpen)}
              >
                Private
                <MdKeyboardArrowRight
                  className={`transition-transform duration-200 ${
                    privateOpen ? "rotate-90" : ""
                  }`}
                />
              </p>

              <AnimatePresence>
                {privateOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 text-gray-300 text-sm">
                      {/* JavaScript */}
                      <div className="group flex items-center justify-between px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                        {/* Left */}
                        <span className="flex items-center gap-1">
                          {/* Dastlab logo, hoverda > icon */}
                          <SiJavascript className="w-4 h-4 group-hover:hidden text-yellow-400" />
                          <MdKeyboardArrowRight className="hidden group-hover:inline w-4 h-4" />
                          JavaScript
                        </span>

                        {/* Right icons */}
                        <div className="hidden group-hover:flex items-center gap-2">
                          <IoMdAdd className="cursor-pointer" />
                          <HiOutlineDotsHorizontal className="cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-gray-300 text-sm">
                      {/* JavaScript */}
                      <div className="group flex items-center justify-between px-2 py-1 rounded hover:bg-[#2a2a2a] cursor-pointer">
                        {/* Left */}
                        <span className="flex items-center gap-1">
                          {/* Dastlab logo, hoverda > icon */}
                          <FaReact className="w-4 h-4 group-hover:hidden text-cyan-400" />
                          <MdKeyboardArrowRight className="hidden group-hover:inline w-4 h-4" />
                          JavaScript
                        </span>

                        {/* Right icons */}
                        <div className="hidden group-hover:flex items-center gap-2">
                          <IoMdAdd className="cursor-pointer" />
                          <HiOutlineDotsHorizontal className="cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider */}
              <div className="border-t border-[#2a2a2a] my-3"></div>

              {/* Teamspaces Accordion */}
              <p
                className="text-sm text-gray-500 mb-1 px-2 cursor-pointer flex items-center justify-between"
                onClick={() => setTeamOpen(!teamOpen)}
              >
                Teamspaces
                <MdKeyboardArrowRight
                  className={`transition-transform duration-200 ${
                    teamOpen ? "rotate-90" : ""
                  }`}
                />
              </p>
              <AnimatePresence>
                {teamOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 text-gray-300 text-sm">
                      <p className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-[#2a2a2a] cursor-pointer">
                        🏠 ASLWEX King’s Notion HQ
                      </p>
                      <p className="px-6 py-1 hover:bg-[#2a2a2a] rounded cursor-pointer">
                        Teamspace Home
                      </p>
                      <p className="px-6 py-1 hover:bg-[#2a2a2a] rounded cursor-pointer">
                        + Add new
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider */}
              <div className="border-t border-[#2a2a2a] my-3"></div>

              {/* Settings */}
              <div className="flex flex-col gap-1 text-gray-300 text-sm">
                <p className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-[#2a2a2a] cursor-pointer">
                  <TbSettings size={19} /> Settings
                </p>
                <p className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-[#2a2a2a] cursor-pointer">
                  <TbShoppingBag size={19} /> Marketplace
                </p>
                <p className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-[#8c000029] hover:text-red-500 cursor-pointer">
                  <TbTrash size={19} /> Trash
                </p>
              </div>
            </div>

            {/* Bottom */}
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

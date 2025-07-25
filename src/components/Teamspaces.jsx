import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineDotsHorizontal, HiOutlineUserGroup, HiOutlineLightBulb } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const iconMap = {
  Design: <HiOutlineLightBulb className="text-gray-400 w-4 h-4 group-hover:hidden" />,
  Marketing: <HiOutlineUserGroup className="text-gray-400 w-4 h-4 group-hover:hidden" />,
};

const data = [
  { name: "Design" },
  { name: "Marketing" }
];

const Teamspaces = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(prev => !prev);

  return (
    <div className="select-none">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={toggleAccordion}
        className="w-full h-6 rounded py-[7px] cursor-pointer hover:bg-[#2c2c2c] flex items-center justify-between px-1 gap-2 group mt-4"
      >
        <p className="text-xs text-gray-400">Teamspaces</p>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <HiOutlineDotsHorizontal className="text-gray-400 cursor-pointer" />
          <GoPlus className="text-gray-400 cursor-pointer" />
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-1 space-y-1"
          >
            {data.slice(0, 1).map(({ name }, index) => (
              <motion.div
                key={index}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-6 rounded py-[7px] cursor-pointer hover:bg-[#2c2c2c] flex items-center justify-between px-1 gap-2 group"
              >
                <div className="flex items-center gap-2">
                  {iconMap[name]}
                  <MdKeyboardArrowRight className="w-4 h-4 text-gray-400 hidden group-hover:block" />
                  <p className="text-xs text-gray-400">{name}</p>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <HiOutlineDotsHorizontal className="text-gray-400 cursor-pointer" />
                  <GoPlus className="text-gray-400 cursor-pointer" />
                </div>
              </motion.div>
            ))}

            <motion.div
              className="flex items-center gap-2 cursor-pointer px-1 py-1 rounded hover:bg-[#2c2c2c] transition-colors group"
            >
              <GoPlus className="text-gray-400 w-4 " />
              <p className="text-xs text-gray-400 group-hover:text-white">Add teamspace</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Teamspaces;

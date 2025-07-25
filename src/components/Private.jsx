import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import {
  JavaScripLogo,
  bash,
  sass,
  react,
  data
} from "../assets/assets";

const iconMap = {
  JavaScript: JavaScripLogo,
  Bash: bash,
  Sass: sass,
  React: react,
};

const Private = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(prev => !prev);

  return (
    <div className="flex flex-col gap-1 select-none">
      {/* Accordion Header */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={toggleAccordion}
        className="w-full h-6 rounded py-[7px] cursor-pointer hover:bg-[#2c2c2c] flex items-center justify-between px-1 gap-2 group"
      >
        <p className="text-xs text-gray-400">Private</p>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <HiOutlineDotsHorizontal className="text-gray-400 cursor-pointer" />
          <GoPlus className="text-gray-400 cursor-pointer" />
        </div>
      </motion.div>

      {/* Accordion Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col gap-1"
          >
            {data.map(({ name }, index) => {
              const Icon = iconMap[name];
              return (
                <motion.div
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-6 rounded py-[7px] cursor-pointer hover:bg-[#2c2c2c] flex items-center justify-between px-1 gap-2 group"
                >
                  <div className="flex items-center gap-2">
                    <img
                      className="w-4 rounded-xs group-hover:hidden"
                      src={Icon}
                      alt={name}
                    />
                    <MdKeyboardArrowRight className="w-4 h-4 text-gray-400 hidden group-hover:block" />
                    <p className="text-xs text-gray-400">{name}</p>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <HiOutlineDotsHorizontal className="text-gray-400 cursor-pointer" />
                    <GoPlus className="text-gray-400 cursor-pointer" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Private;

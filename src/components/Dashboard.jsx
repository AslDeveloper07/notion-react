import React, { useState } from "react";
import { RxNotionLogo } from "react-icons/rx";
import { BsLayoutSidebar } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import DashboardItems from "./DashboardItems";
import Private from "./Private";
import Teamspaces from "./Teamspaces";
import SlideItems from "./SlideItems";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <div className="absolute top-2 left-2 z-10 flex gap-3 pt-1 items-center">
        <RxNotionLogo size={16} className="text-gray-400" />
        <BsLayoutSidebar
          className="text-gray-400 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 200, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#202020] h-[100vh] p-2  overflow-hidden"
          >
            <div className="pt-6 flex flex-col gap-2">
              <DashboardItems />
              <Private />
              <Teamspaces />
              <SlideItems />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;

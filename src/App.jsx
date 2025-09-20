import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Hero from "./components/Hero";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-screen bg-[#191919] text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Asosiy qism */}
      <motion.div
        animate={{ marginLeft: isOpen ? 220 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="flex flex-col h-full"
      >
        <Navbar setIsOpen={setIsOpen} />
        <Hero />
      </motion.div>
    </div>
  );
};

export default App;

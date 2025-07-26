import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidRightArrow } from "react-icons/bi";
import { MdDragIndicator, MdPlayArrow } from "react-icons/md";
import { GoPlus } from "react-icons/go";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dynamicContent, setDynamicContent] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const contentRef = useRef(null);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const handlePlusClick = () => {
    setShowInput(true);
    setIsOpen(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setDynamicContent((prev) => [...prev, inputValue.trim()]);
      setInputValue("");
      setShowInput(false);
    }
  };

  return (
    <div className="ml-2 pl-2 group relative">
      <div className="flex items-center gap-1 cursor-pointer">
        <button
          onClick={handlePlusClick}
          title="Qo‘shish"
        >
          <GoPlus className="text-white text-2xs cursor-pointer" />
        </button>

     <MdDragIndicator className="text-gray-400 text-lg cursor-grab active:cursor-grabbing" />


        <button onClick={toggleAccordion} className="flex items-center gap-2 cursor-pointer">
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <MdPlayArrow className="text-gray-300 text-sm" />
          </motion.div>
          <span className="text-gray-200 text-sm text-left">{title}</span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: contentRef.current?.scrollHeight || "auto",
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden pl-4"
          >
            <div ref={contentRef} className="py-1">
              {children}

              {dynamicContent.map((item, index) => (
                <p key={index} className="text-sm text-gray-300 ml-2">
                  {item}
                </p>
              ))}

              {showInput && (
                <input
                  type="text"
                  // placeholder="Matn kiriting va Enter bosing"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="mt-1 mb-2 w-full p-1 text-sm text-white outline-none"
                  autoFocus
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = () => {
  return (
    <div
      className="w-[700px] h-fit mx-auto mt-10  rounded-lg"
      style={{ backgroundColor: "#19191919" }}
    >
      <AccordionItem title="1-Modul(JavaScript fundamental Part-1)">
        <AccordionItem title="1-dars  ">
          <AccordionItem title="JavaScript nima?">
            <AccordionItem title="JavaScript nima ?-dasturlash tili ">
              <p className="text-sm text-gray-200 pl-12 h-fit">
                — bu asosiy skriptlash tili bo‘lib, u veb-sahifalarga dinamiklik
                qo‘shadi. U dastlab brauzerlar uchun ishlab chiqilgan, ammo
                hozirda Node.js orqali server tomonida ham ishlatilmoqda.
              </p>
            </AccordionItem>
          </AccordionItem>
        </AccordionItem>
      </AccordionItem>
    </div>
  );
};

export default Accordion;

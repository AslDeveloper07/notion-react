import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidRightArrow } from "react-icons/bi";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <div className="ml-2 pl-2">
      <button
        onClick={toggleAccordion}
        className="flex items-center gap-2 cursor-pointer "
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <BiSolidRightArrow className="text-gray-300 text-sm" />
        </motion.div>
        <span className="text-gray-200 text-sm text-left">{title}</span>
      </button>

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
            className="overflow-hidden pl-4 "
          >
            <div ref={contentRef} className="py-1">
              {children}
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
      className="max-w-3xl h-[300px] mx-auto mt-10 p-4 rounded-lg "
      style={{ backgroundColor: "#19191919" }}
    >
      <AccordionItem title="1-Modul(JavaScript  fundamental Part-1)">
        <AccordionItem title="1-dars  ">
          <AccordionItem title="JavaScript nima?">
            <AccordionItem title="JavaScript nima ?-dasturlash tili ">
              <p className="text-sm text-gray-200">
               —bu asosiy skriptlash tili bo‘lib, u veb-sahifalarga dinamiklik qo‘shadi. U dastlab brauzerlar uchun ishlab chiqilgan, ammo hozirda Node.js orqali server tomonida ham ishlatilmoqda.
              </p>
            </AccordionItem>
          </AccordionItem>
        </AccordionItem>
      </AccordionItem>
    </div>
  );
};

export default Accordion;

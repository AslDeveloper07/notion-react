import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdDragIndicator, MdPlayArrow } from "react-icons/md";
import { GoPlus } from "react-icons/go";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dynamicContent, setDynamicContent] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const contentRef = useRef(null);
  const editorRef = useRef(null);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  const handlePlusClick = () => {
    setShowEditor(true);
    setIsOpen(true);
  };

  const handleEditorKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = editorRef.current?.innerText.trim();
      if (text) {
        setDynamicContent((prev) => [...prev, text]);
        editorRef.current.innerText = "";
        setShowEditor(false);
      }
    }
  };

  return (
    <div className="ml-2 pl-2 group relative">
      <div className="flex items-center gap-1 cursor-pointer">
        <button onClick={handlePlusClick} title="Qo‘shish">
          <GoPlus className="text-white text-2xs cursor-pointer" />
        </button>

        <MdDragIndicator className="text-gray-400 text-lg cursor-grab active:cursor-grabbing" />

        <button
          onClick={toggleAccordion}
          className="flex items-center gap-2 cursor-pointer"
        >
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
            <div ref={contentRef} className="py-1 space-y-2">
              {children}

              {dynamicContent.map((item, index) => (
                <p
                  key={index}
                  className="text-sm text-gray-300 ml-2"
                >
                  {item}
                </p>
              ))}

              {showEditor && (
                <div
                  ref={editorRef}
                  contentEditable
                  placeholder="Yozish uchun joy..."
                  onKeyDown={handleEditorKeyDown}
                  className="editable-div text-sm text-white w-full px-2 py-1 outline-none"
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    caretColor: "rgba(255,255,255,0.8)",
                    minHeight: "1.5em",
                  }}
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
      className="w-[700px] h-fit mx-auto mt-10 rounded-lg"
      style={{ backgroundColor: "#19191919" }}
    >
      <AccordionItem title="1-Modul(JavaScript fundamental Part-1)">
        <AccordionItem title="1-dars  ">
          <AccordionItem title="JavaScript nima?">
            <AccordionItem title="JavaScript nima ?-dasturlash tili ">
              <p className="text-sm text-gray-200 h-fit pl-2">
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

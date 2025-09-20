import React, { useState } from "react";

const Content = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="max-w-[900px] mx-auto pt-5">
      {/* Title (New page) */}
      <div className="relative">
        {title === "" && (
          <span className="absolute top-0 left-0 text-[#737373] pointer-events-none text-4xl font-bold">
            New page
          </span>
        )}
        <div
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => setTitle(e.currentTarget.textContent)}
          className="text-4xl outline-none focus:outline-none border-none font-bold min-h-[48px]"
        ></div>
      </div>

      {/* Content (Write something...) */}
      <div className="relative mt-5">
        {content === "" && (
          <span className="absolute top-0 left-0 text-[#737373] pointer-events-none text-xl">
            Write something...
          </span>
        )}
        <div
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => setContent(e.currentTarget.textContent)}
          className="text-xl outline-none focus:outline-none border-none min-h-[28px]"
        ></div>
      </div>
    </div>
  );
};

export default Content;

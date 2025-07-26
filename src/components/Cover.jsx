import React, { useState, useRef } from "react";

const Cover = () => {
  const [coverImage, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80"
  );

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      setCoverImage(imageURL);
    }
  };

  return (
    <div className="relative w-full h-60 overflow-hidden">
      <img
        src={coverImage}
        alt="Custom Cover"
        className="object-cover w-full h-full transition-all duration-500"
      />

      <button
        onClick={handleButtonClick}
        className="absolute top-3 right-3 bg-[#191919] bg-opacity-90 text-xs text-white px-4 py-1 rounded-md shadow hover:bg-opacity-100 transition"
      >
        Rasmingizni tanlang
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default Cover;

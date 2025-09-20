import React, { useState, useEffect } from "react";

const Cover = () => {
  const [cover, setCover] = useState(null);

  // component ochilganda localStorage-dan coverni olish
  useEffect(() => {
    const savedCover = localStorage.getItem("coverImage");
    if (savedCover) {
      setCover(savedCover);
    }
  }, []);

  // rasmni yuklab olish va localStorage-ga saqlash
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setCover(reader.result);
      localStorage.setItem("coverImage", reader.result);
    };
    reader.readAsDataURL(file);
  };

  // coverni o‘chirish
  const handleRemove = () => {
    setCover(null);
    localStorage.removeItem("coverImage");
  };

  return (
    <div className="w-full">
      {/* Cover */}
      <div className="relative w-full h-60 bg-gray-800 flex items-center justify-center overflow-hidden">
        {cover ? (
          <img
            src={cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-gray-400">No cover selected</p>
        )}

        {/* Tugmalar */}
        <div className="absolute top-2 right-2 flex gap-2">
          <label className="bg-black/60 text-white text-xs px-2 py-1 rounded cursor-pointer hover:bg-black/80">
            Change Cover
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
          </label>
          {cover && (
            <button
              onClick={handleRemove}
              className="bg-black/60 text-white text-xs px-2 py-1 rounded hover:bg-black/80"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cover;

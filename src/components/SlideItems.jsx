import React from 'react'
import { CiSettings } from 'react-icons/ci';
import { IoTrashOutline } from 'react-icons/io5';
import { PiShapesFill } from 'react-icons/pi';


const SlideItems = () => {

const itemsBottom = [
  { icon: <CiSettings className='text-gray-400'  />, label: "Search" },
  { icon: <PiShapesFill  className='text-gray-400' />, label: "Home" },
  { icon: <IoTrashOutline className='text-gray-400 ' />, label: "Inbox" },
];

return (
  <div className="flex flex-col gap-1 py-6">
    {itemsBottom.map(({ icon, label }, index) => (
      <div
        key={index}
        className="w-full h-6 rounded py-[7px] cursor-pointer hover:bg-[#2c2c2c] flex items-center px-1 gap-2"
      >
        {icon}
        <p className="text-xs text-gray-400">{label}</p>
      </div>
    ))}
  </div>
);
}

export default SlideItems
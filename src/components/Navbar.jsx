import { BsLayoutSidebar } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdStarOutline } from "react-icons/io";
import { MdKeyboardArrowDown, MdLock } from "react-icons/md";
import { RxNotionLogo } from "react-icons/rx";
import { TbMessage } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pr-4 ">
      <div className="flex gap-0 p-2 pl-2 items-center">
        <p className="text-xs  text-white  hover:bg-[#202020] rounded cursor-pointer px-2 py-[2px]">
          JavaScript
        </p>
        <div className="flex items-center gap-1 hover:bg-[#202020] rounded cursor-pointer px-2 py-[2px]">
          <MdLock size={12} className="text-gray-600" />
          <p className="text-xs text-gray-400">Previte</p>
          <MdKeyboardArrowDown size={10} className="text-gray-300" />
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center px-[2px] ">
        <p className="text-xs text-gray-500">Edited 57m ago</p>
        <TbMessage className="text-white cursor-pointer" />
        <IoMdStarOutline className="text-white cursor-pointer" />
        <HiOutlineDotsHorizontal className="text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;

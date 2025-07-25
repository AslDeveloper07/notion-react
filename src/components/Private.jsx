import { GoPlus } from "react-icons/go"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md"
import { JavaScripLogo } from "../assets/assets"

const Private = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="f-full h-6  rounded py-[7px] cursor-pointer hover:bg-[#2c2c2c] flex items-center justify-between px-1 gap-2 group">
        <p className="text-xs text-gray-400">Privite</p>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <HiOutlineDotsHorizontal className="text-gray-400 cursor-pointer" />
        <GoPlus className="text-gray-400 cursor-pointer" />
        </div>
      </div>
      <div className="f-full h-6  rounded py- [7px] cursor-pointer hover:bg-[#2c2c2c] flex items-center justify-between px-1 gap-2 group">
       <div className="flex items-center gap-2">
       <img className="w-4 rounded-xs group-hover:hidden" src={JavaScripLogo} alt="" />
       <MdKeyboardArrowRight className="w-4 h-4 text-gray-400 hidden group-hover:block" />
       <p className="text-xs text-gray-400">JavaScript</p>
       </div>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <HiOutlineDotsHorizontal className="text-gray-400 cursor-pointer" />
        <GoPlus className="text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Private
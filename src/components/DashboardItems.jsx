import { IoSearchOutline } from "react-icons/io5"
import { LuInbox } from "react-icons/lu"
import { TbSmartHome } from "react-icons/tb"

const DashboardItems = () => {
  return (
    <div className="flex flex-col gap-1 px-2 py-4">
      <div className="f-full h-6  rounded py-[7px] cursor-pointer hover:bg-[#2c2c2c] flex items-center px-1 gap-2">
<IoSearchOutline className="text-gray-400 " />
<p className="text-xs text-gray-400">Search</p>
      </div>
      <div className="f-full h-6  rounded py-[7px] cursor-pointer hover:bg-[#2c2c2c] flex items-center px-1 gap-2">
<TbSmartHome className="text-gray-400 " />
<p className="text-xs text-gray-400">Home</p>
      </div>
      <div className="f-full h-6  rounded py-[7px] cursor-pointer hover:bg-[#2c2c2c] flex items-center px-1 gap-2">
        <LuInbox className="text-gray-400 " />
        <p className="text-xs text-gray-400">Inbox</p>
      </div>
    </div>
  )
}

export default DashboardItems
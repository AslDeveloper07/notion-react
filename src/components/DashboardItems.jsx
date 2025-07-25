import { IoSearchOutline } from "react-icons/io5";
import { LuInbox } from "react-icons/lu";
import { TbSmartHome } from "react-icons/tb";

const items = [
  { icon: <IoSearchOutline className="text-gray-400" />, label: "Search" },
  { icon: <TbSmartHome className="text-gray-400" />, label: "Home" },
  { icon: <LuInbox className="text-gray-400" />, label: "Inbox" },
];

const DashboardItems = () => {
  return (
    <div className="flex flex-col gap-1 py-6">
      {items.map(({ icon, label }, index) => (
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
};

export default DashboardItems;

import { BsLayoutSidebar } from "react-icons/bs"
import { RxNotionLogo } from "react-icons/rx"
import DashboardItems from "./DashboardItems"

const Dashboard = () => {
  return (
    <div className="w-[250px] bg-[#202020] h-[729px]">
       <div className="flex gap-3 p-2">
        <RxNotionLogo size={16} className="text-gray-400"  />
       <BsLayoutSidebar className="text-gray-400" />
      </div>
      <DashboardItems/>
    </div>
  )
}

export default Dashboard
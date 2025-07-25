import { BsLayoutSidebar } from "react-icons/bs"
import { RxNotionLogo } from "react-icons/rx"
import DashboardItems from "./DashboardItems"
import Private from "./Private"

const Dashboard = () => {
  return (
    <div className="w-[250px] bg-[#202020] h-[729px] p-2">
       <div className="flex gap-3 pt-1 pl-1">
        <RxNotionLogo size={16} className="text-gray-400"  />
       <BsLayoutSidebar className="text-gray-400" />
      </div>
      <DashboardItems/>
      <Private/>
    </div>
  )
}

export default Dashboard
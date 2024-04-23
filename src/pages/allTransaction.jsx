// import { useState } from "react"
// import { Label } from "recharts"
// import Chart from "../component/chart1"

// export default function Dashboard() {
//   const [activeTab, setActiveTap] = useState("html")
//   const data = [
//     {
//       Label: "All Transaction",
//       value: "chart",
//       desc: <Chart/>
      
//     },
//     {
//       label: "Transactions",
//       value: "data"
//     }

//   ]
//   return(
//     <>
// <Chart />
//     </>
//   )
// }






































import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
} from "lucide-react";
import { useState } from "react";
import Chart from "../component/chart1.jsx";
import { Dash } from "../component/dashboard";

export default function Nav() {
  const [active, setActive] = useState(0);

  const navLink = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      desc: <Chart/>
      
    },
    {
      name: "Daily Budget",
      icon: Clock3,
      desc: <Dash/>
    },
    {
      name: "New Transaction",
      icon: BarChart2,
    },
    {
      name: "Activities",
      icon: ArrowRightLeft,
    },
    {
      name: "Help ?",
      icon: HelpCircleIcon,
    },
  ];
  return (
    <>
      <div className="flex">
        <div>
      <div className="px-10 py-12 flex flex-col border border-r-1 w-2/5 h-screen bg-sky-950">
        <div className="flex space-x=3 items-center">
          <img src="" alt="" />
          <span className="text-gray-200 text-2xl font-bold text-italic bg-cyan-400 px-5">Spend Wise</span>
        </div>
         {/* <div className="w-5 h-5 bg-orange-600 rounded-full absolute-right-[10.5px] top-12 flex items-center justify-center">
          <img src={ArrowRightLeft} alt="" />
         </div> */}
        <div className="mt-9 flex flex-col space-y-8 py-2 rounded text-cyan-400">
          {navLink.map((item, index) => (
            <div
              key={index}
              className={`flex space-x-3' + ${
                active === index ? "bg-(#FFBC8C) text-gray-200 font-semibold" : ""
              }`}
              onClick={() => setActive(index)}
            >
              <item.icon />
              <span>{item.name}</span>
            </div>
          ))}


          {/* {navLink.map((item, index) => <div  key = {index} className={'flex space-x-3' + {active === index ? "bg-(#FFBC8C) text-white font-semibold"}}
        onClick ={() => setActive(index)}
        >
            <item.icon/>
            <span>{item.name}</span></div>) */}
        </div>
      </div>
      </div>
      <div>
      {/* <Chart/> */}
           {navLink.map((navLink)=>(
        <div>{navLink.desc}</div>
      ))}
      {/* <Dash/> */}
      </div>
      </div>
    </>
  );
}

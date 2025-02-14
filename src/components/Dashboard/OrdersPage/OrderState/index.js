import React from "react";
import { NavLink } from "react-router-dom";
const OrderState = ({selectedTab, onSelectTab}) => {
    const tabs = ["Ирсэн бараа","Хүлээгдэж буй","Хүлээж авсан","Цуцалсан","Захиалын дугаар"];
    return (
        <div className="">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onSelectTab(tab)}
            className={`${selectedTab === tab ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"} rounded-t-md m-1`}
          >
            {tab}
          </button>
        ))}
      </div>

        // <nav className="my-6">
        //     <NavLink to="/order/arrived" className={({ isActive }) => isActive ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"}>
        //     Ирсэн бараа
        //     </NavLink>
        //     <NavLink to="/order/waiting" className={({ isActive }) => isActive ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"}>
        //     Хүлээгдэж буй
        //     </NavLink>
        //     <NavLink to="/order/accepted" className={({ isActive }) => isActive ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"}>
        //     Хүлээж авсан
        //     </NavLink>
        //     <NavLink to="/order/cancelled" className={({ isActive }) => isActive ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"}>
            
        //     </NavLink>
        //     <NavLink to="/order/order-number" className={({ isActive }) => isActive ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"}>
        //     Захиалын дугаар
        //     </NavLink>
        // </nav>
    )
}

export default OrderState;
import React from "react";
import { NavLink } from "react-router-dom";
const ReadyOrdered = () => {
    return (    
        <nav className="inline-block my-2">
            <NavLink to="/ready" className={({ isActive }) => isActive ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"}>
                БЭЛЭН БАРАА
            </NavLink>
            <NavLink to="/order" className={({ isActive }) => isActive ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"}>
                ЗАХИАЛГЫН БАРАА
            </NavLink>
        </nav>
    )
}

export default ReadyOrdered;
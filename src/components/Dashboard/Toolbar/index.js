import React from "react";
import { NavLink } from "react-router-dom";
const ReadyOrdered = () => {
    return (    
        <nav className="inline-block my-2 text-base md:text-lg lg:text-3xl lg:font-normal lg:mt-20 lg:mx-6">
            <NavLink to="/ready" className={({ isActive }) => isActive ? "text-white bg-primary h-full p-2 hover:bg-primary-hover lg:p-4 lg:px-8 lg:rounded-lg" : "text-gray-800 bg-gray-200 p-2 hover:bg-gray-400 lg:p-4 lg:px-8 lg:rounded-lg"}>
                БЭЛЭН БАРАА
            </NavLink>
            <NavLink to="/order" className={({ isActive }) => isActive ? "text-white bg-primary h-full p-2 hover:bg-primary-hover lg:p-4 lg:px-8 mx-2 lg:rounded-lg" : "text-gray-800 bg-gray-200 p-2 hover:bg-gray-400 lg:p-4 lg:px-8 mx-2 lg:rounded-lg"}>
                ЗАХИАЛГЫН БАРАА
            </NavLink>
        </nav>
    )
}

export default ReadyOrdered;
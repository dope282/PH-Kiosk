import React from "react";
import { NavLink } from "react-router-dom";
const ReadyState = (props) => {
    return (
        <nav className="my-6">
            <NavLink to="/ready/costco" className={({ isActive }) => isActive ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"}>
                COSTCO
            </NavLink>
            <NavLink to="/ready/playhouse" className={({ isActive }) => isActive ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"}>
                PLAYHOUSE
            </NavLink>
            <NavLink to="/ready/fresh-food" className={({ isActive }) => isActive ? "text-white bg-teal-500 h-full p-2 hover:bg-teal-600" : "text-gray-800 bg-gray-300 p-2 hover:bg-gray-400"}>
            FRESH FOOD
            </NavLink>
        </nav>
    )
}

export default ReadyState;
import React from "react";
const ReadyState = ({selectedTab, onSelectTab}) => {
    const tabs = ["COSTCO", "PLAYHOUSE", "FRESH FOOD"]
    return (
        <div>
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
    )
}

export default ReadyState;
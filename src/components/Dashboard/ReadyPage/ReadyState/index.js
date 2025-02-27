import React from "react";
const ReadyState = ({selectedTab, onSelectTab}) => {
    const tabs = ["COSTCO", "PLAYHOUSE", "FRESH FOOD"]
    return (
        <div className="w-full flex justify-around lg:px-4 lg:mt-16 lg:p-6 lg:tracking-tight">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onSelectTab(tab)}
                    className={`${selectedTab === tab ? "text-white bg-primary h-full p-2 hover:bg-primary-hover lg:py-7 lg:w-1/47 lg:rounded-t-xl lg:border-2 lg:w-1/3" : "text-gray-700 bg-gray-300 lg:bg-white p-2 hover:bg-gray-400 lg:py-7 lg:rounded-t-xl lg:border-2 lg:w-1/3"} rounded-t-md m-1`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default ReadyState;
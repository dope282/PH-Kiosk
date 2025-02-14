import React from "react";
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
    )
}

export default OrderState;
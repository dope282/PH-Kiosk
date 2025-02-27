import React from "react";

function NumericKeypad({ onInput, onBackspace, onSubmit }) {
  const keys = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["<", "0", ">"],
  ];

  return (
    <div className="fixed bottom-0 w-screen bg-white h-1/4 ">
    <div className="fixed w-2/4 h-1/4  bottom-10 left-1/2 transform -translate-x-1/2 z-50 grid grid-cols-3 gap-6 bg-gray-300 p-4 rounded-lg shadow-lg lg:w-4/6 lg:h-2/6">
      {keys.flat().map((key) => (
        <button
        key={key}
        onClick={() => {
            if (key === "<") onBackspace();
            else if (key === ">") onSubmit();
            else onInput(key);
          }}
          className={`w-full h-full text-4jxl font-semibold bg-gray-100 rounded-md shadow-md transition text-base md:text-lg lg:text-5xl
            ${key === ">" ? "bg-primary text-white hover:bg-primary-hover" : ""}
            ${key === "<" ? "bg-primary text-white hover:bg-primary-hover" : ""}
            ${key !== ">" && key !== "<" ? "hover:bg-gray-200 active:bg-gray-400" : ""}`}
            >
          {key}
        </button>
      ))}
    </div>
      </div>
  );
}

export default NumericKeypad;

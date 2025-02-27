import React from "react";

const QuantitySelector = ({ quantity, onIncrease, onDecrease, maxQuantity }) => {
  return (
    <div className="bg-primary flex text-white w-1/3 justify-around rounded-xl lg:my-6 lg:rounded-3xl">
      <button onClick={onDecrease} className="w-full lg:border-r-2" disabled={quantity <= 1}>-</button>
      <div className="w-full flex justify-center cursor-default lg:items-center">{quantity}</div>
      <button onClick={onIncrease} className="w-full lg:border-l-2" disabled={quantity >= maxQuantity}>+</button>
    </div>
  );
};

export default QuantitySelector;
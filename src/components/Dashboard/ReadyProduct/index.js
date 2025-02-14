import React from "react";
import { useState } from "react";
import ReadyState from "../ReadyPage/ReadyState";

const products = [
    { id: 1, name: "Costco Coffee", status: "PLAYHOUSE" },
    { id: 2, name: "Playhouse Set", status: "PLAYHOUSE" },
    { id: 3, name: "Freshfood Pack", status: "PLAYHOUSE" },
    { id: 4, name: "Apple Juice", status: "COSTCO" },
    { id: 5, name: "Milk Carton", status: "COSTCO" },
    { id: 6, name: "Costco Coffee", status: "COSTCO" },
    { id: 7, name: "Playhouse Set", status: "COSTCO" },
    { id: 8, name: "Freshfood Pack", status: "FRESH FOOD" },
    { id: 9, name: "Apple Juice", status: "FRESH FOOD" },
    { id: 10, name: "Milk Carton", status: "FRESH FOOD" },
    { id: 11, name: "Samsung TV", status: "FRESH FOOD" },,
  ];

const ReadyProduct = () => {
    const [selectedTab, setSelectedTab] = useState("Бүх бараа");

    const filteredProducts = products.filter((product) => product.status === selectedTab)

    return (
        <div className="p-4">
      <ReadyState selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <div className="mt-4">
        {filteredProducts.length > 0 ? (
          <ul className="grid grid-cols-3 gap-2">
            {filteredProducts.map((product) => (
              <li key={product.id} className="p-2 bg-gray-100 rounded cursor-pointer">
                {product.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Бүтээгдэхүүн байхгүй</p>
        )}
      </div>
    </div>
    )
}

export default ReadyProduct;
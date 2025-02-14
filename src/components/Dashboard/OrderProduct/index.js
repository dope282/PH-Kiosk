import React from "react";
import { useState } from "react";
import OrderState from "../OrdersPage/OrderState";

const products = [
    { id: 1, name: "Costco Coffee", status: "Хүлээж авсан" },
    { id: 2, name: "Playhouse Set", status: "Хүлээгдэж буй" },
    { id: 3, name: "Freshfood Pack", status: "Ирсэн бараа" },
    { id: 4, name: "Apple Juice", status: "Хүлээж авсан" },
    { id: 5, name: "Milk Carton", status: "Ирсэн бараа" },
    { id: 6, name: "Costco Coffee", status: "Ирсэн бараа" },
    { id: 7, name: "Playhouse Set", status: "Хүлээгдэж буй" },
    { id: 8, name: "Freshfood Pack", status: "Ирсэн бараа" },
    { id: 9, name: "Apple Juice", status: "Хүлээж авсан" },
    { id: 10, name: "Milk Carton", status: "Цуцалсан" },
    { id: 11, name: "Samsung TV", status: "Захиалын дугаар" },,
  ];

const Product = () => {
    const [selectedTab, setSelectedTab] = useState("Бүх бараа");

    const filteredProducts = products.filter((product) => product.status === selectedTab)

    return (
        <div className="p-4">
      <OrderState selectedTab={selectedTab} onSelectTab={setSelectedTab} />
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

export default Product;
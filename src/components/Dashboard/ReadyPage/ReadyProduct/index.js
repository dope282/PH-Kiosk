import React, { useState } from "react";
import ReadyState from "../ReadyState";
import products from "../../Products";
import SelectedProduct from "./selectedProduct";

const ReadyProduct = () => {
  const [selectedTab, setSelectedTab] = useState("PLAYHOUSE");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const filteredProducts = products.filter((product) => product.status === selectedTab);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);


  const handleSelectProduct = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="h-3/4 text-base md:text-lg lg:text-3xl">
        <ReadyState selectedTab={selectedTab} onSelectTab={(tab) => {
          setSelectedTab(tab); 
          setSelectedProduct(null); 
        }}  />
        <div className="p-4 h-full lg:px-10">
          {selectedProduct ? (
            <SelectedProduct 
              product={selectedProduct} 
              onClose={() => setSelectedProduct(null)} 
              otherProducts={filteredProducts.filter((product) => product.id !== selectedProduct.id)} 
            />
          ) : (
            <div className="w-full">
              {paginatedProducts.length > 0 ? (
                <ul className="grid grid-cols-3 gap-2 lg:gap-5">
                  {paginatedProducts.map((product) => (
                    <li 
                      key={product.id} 
                      onClick={() => handleSelectProduct(product.id)} 
                      className="relative p-2 bg-white rounded cursor-pointer transition-all border-2 lg:border-4 lg:border-gray-200 lg:rounded-2xl lg:shadow-xl border-transparent hover:border-primary-hover"
                    >
                      {product.img && <img src={product.img} alt={product.name} className="w-full flex-wrap object-cover" />}
                      <div className="flex gap-1 text-gray-500 lg:h-14 lg:items-center">
                        <p className="lg:text-xl">{product.name}</p>
                        {product.code && <p className="lg:text-xl">Код: {product.code}</p>}
                      </div>
                      <div className="flex justify-between mt-1 text-gray-700">
                        <p className="lg:text-xl lg:font-semibold">{product.price && <p>{product.price.toLocaleString()}₮</p>}</p>
                        {product.quantity && <p className="lg:text-xl lg:font-semibold">{product.quantity}</p>}
                      </div>
                      <div className="">
                        <button className="bg-gray-200 rounded-sm w-full mt-2 p-1 lg:rounded-xl">
                          <p className="lg:text-2xl lg:bg-gray-200">Дэлгэрэнгүй</p>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 flex items-center justify-center ">Жагсаалт хоосон байна</p>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-center mt-4 space-x-7 lg:fixed lg:left-1/2 lg:-translate-x-1/2 lg:bottom-12">
          {[...Array(totalPages)].map((_, index) => (
            <button 
              key={index} 
                onClick={() => setCurrentPage(index + 1)}
                  className={`px-6 py-3 rounded-full lg:text-4xl ${currentPage === index + 1 ? "bg-primary text-white" : "bg-gray-300"}`}
              >
                {index + 1}
            </button>
            ))}
        </div>
    </div>
  );
};

export default ReadyProduct;
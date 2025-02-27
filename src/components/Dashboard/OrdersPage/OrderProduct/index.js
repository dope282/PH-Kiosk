import React, { useState, useContext, useEffect } from "react";
import OrderState from "../OrderState";
import products from "../../Products";
import { ProductContext } from "../../Products/ProductContext/ProductContext";

const Product = () => {
    const { setTotalQuantity, setTotalPrice } = useContext(ProductContext);
    const [selectedTab, setSelectedTab] = useState("Ирсэн бараа");
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const receivedProducts = products.filter((product) => product.status === "Ирсэн бараа");

    const filteredProducts = selectedTab === "" 
        ? products 
        : products.filter((product) => product.status === selectedTab);

    const handleSelectProduct = (id, status) => {
        if (status !== "Ирсэн бараа") return;
        setSelectedProducts((prevSelected) =>
            prevSelected.includes(id) ? prevSelected.filter((pid) => pid !== id) : [...prevSelected, id]
        );
    };

    useEffect(() => {
        const selectedReceivedProducts = selectedProducts
            .map((id) => receivedProducts.find((p) => p.id === id))
            .filter((product) => product);

        const totalQuantity = selectedReceivedProducts.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = selectedReceivedProducts.reduce((sum, item) => sum + item.cargo, 0);

        setTotalQuantity(totalQuantity);
        setTotalPrice(totalPrice);
    }, [selectedProducts, receivedProducts, setTotalQuantity, setTotalPrice]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="h-3/4 text-base md:text-lg lg:text-3xl">
            <OrderState selectedTab={selectedTab} onSelectTab={setSelectedTab} />
            <div className="p-4 h-full lg:p-10 lg:pt-0">
                {paginatedProducts.length > 0 ? (
                    <>
                        <ul className="grid grid-cols-3 gap-2 lg:gap-5">
                            {paginatedProducts.map((product) => (
                                <li 
                                    key={product.id} 
                                    onClick={() => handleSelectProduct(product.id, product.status)} 
                                    className={`relative p-2 bg-white rounded cursor-pointer transition-all ${
                                        selectedProducts.includes(product.id) && product.status === "Ирсэн бараа" 
                                            ? "border-primary lg:shadow-xl lg:border-primary lg:rounded-2xl" 
                                            : "border-transparent lg:rounded-2xl"
                                    } lg:border-4 lg:border-gray-200`}
                                >
                                    {selectedProducts.includes(product.id) && product.status === "Ирсэн бараа" && (
                                        <div className="absolute top-2 right-2 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-white lg:w-10 lg:h-10 lg:top-6 lg:right-6">
                                            ✓ 
                                        </div>
                                    )}
                                    {product.img && <img src={product.img} alt={product.name} className="w-full flex-wrap object-cover" />}
                                    <div className="flex gap-1 text-gray-500 lg:h-16 lg:items-center">
                                        <p className="lg:text-xl">{product.name}</p>
                                        {product.code && <p className="lg:text-xl">Код: {product.code}</p>}
                                    </div>
                                    <div className="flex justify-between mt-1 text-gray-700">
                                        {product.price && <p className="lg:text-xl lg:font-semibold">{product.price}₮</p>}
                                        {product.quantity && <p className="lg:text-xl lg:font-semibold">{product.quantity} ширхэг</p>}
                                    </div>
                                    {product.cargo && (
                                        <button className="bg-gray-200 rounded-sm w-full my-2 p-1 lg:rounded-xl">
                                            <p className="lg:text-2xl lg:bg-gray-200">Карго: {product.cargo.toLocaleString()}₮</p>
                                        </button>
                                    )}
                                    {product.status === "Ирсэн бараа" && (
                                        selectedProducts.includes(product.id) ? 
                                            <button className="bg-primary rounded-sm w-full my-2 p-1 lg:rounded-xl">
                                                <p className="lg:text-2xl lg:bg-primary lg:text-white">Сонгосон</p>
                                            </button> 
                                            : 
                                            <button className="bg-gray-200 rounded-sm w-full my-2 p-1 lg:rounded-xl">
                                                <p className="lg:text-2xl lg:bg-gray-200 lg:justify-center lg:flex">Сонгох</p>
                                            </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p className="text-gray-500 flex items-center justify-center">Жагсаалт хоосон байна</p>
                )}
                    </div>
                        <div className="flex justify-center mt-4 space-x-7 lg:fixed lg:left-1/2 lg:-translate-x-1/2 lg:top-3/4 z-50">
                            {[...Array(totalPages)].map((_, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`px-6 py-3 rounded-full lg:text-4xl ${currentPage === index + 1 ? "bg-primary text-white" : "bg-gray-200"}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
        </div>
    );
};

export default Product;
